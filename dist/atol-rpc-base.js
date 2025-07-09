import AtolWrapper from 'node-atol-wrapper';
import * as util from 'node:util';
import { jsonTaskResultTypeGuards, jsonTaskTypeGuards, } from './types/json-task.js';
import { TypeGuardError } from './common/types/type-guard.error.js';
import { WorkMode } from './types/settings.js';
export default class AtolRpcBase extends AtolWrapper.Fptr10 {
    workMode = WorkMode.async;
    constructor(settings) {
        super();
        this.create();
        process.on('SIGINT', () => {
            this.destroy();
        });
        process.on('SIGTERM', () => {
            this.destroy();
        });
        if (settings) {
            this.setSettings(settings);
        }
    }
    getSettings() {
        const { workMode } = this;
        return { ...super.getSettings(), workMode };
    }
    setSettings(settings) {
        const { workMode = this.workMode } = settings;
        this.workMode = workMode;
        return super.setSettings(settings);
    }
    async processJsonTask(task) {
        const paramTypeGuard = jsonTaskTypeGuards[task.type];
        const resultTypeGuard = jsonTaskResultTypeGuards[task.type];
        if (typeof paramTypeGuard !== 'function' || typeof resultTypeGuard !== 'function') {
            throw new EvalError(`Method ${task.type} not fully implemented`);
        }
        let validationErrors = {};
        if (!paramTypeGuard(task, validationErrors)) {
            throw new TypeGuardError('Invalid input params type', { cause: validationErrors });
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const result = await this.processJsonP(task);
        validationErrors = {};
        if (!resultTypeGuard(result, validationErrors)) {
            throw new TypeGuardError('Invalid return value type', { cause: validationErrors });
        }
        return result;
    }
    async processJsonP(json) {
        const { workMode } = this;
        return new Promise((resolve, reject) => {
            try {
                if (workMode === WorkMode.async) {
                    this.processJsonAsync(json, (error, result) => {
                        if (error) {
                            if (error instanceof Error) {
                                reject(error);
                            }
                            else {
                                reject(new Error(util.inspect(error, { showHidden: true }), { cause: error }));
                            }
                        }
                        else {
                            resolve(result);
                        }
                    });
                }
                else if (workMode === WorkMode.sync) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    const result = this.processJson(json);
                    resolve(result);
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    reject(error);
                }
                else {
                    reject(new Error(util.inspect(error, { showHidden: true }), { cause: error }));
                }
            }
        });
    }
}
