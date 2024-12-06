import {Fptr10} from 'node-atol-wrapper';
import {promisify} from 'node:util';
import {type OpenShiftTaskParam} from './types/open-shift.task-param.js';
import {type JsonTask} from './types/json-task.js';
import {JsonTaskType} from './types/json-task-type.js';
import {isOpenShiftTaskResult, type OpenShiftTaskResult} from './types/open-shift.task-result.js';
import {type CloseShiftTaskParam} from './types/close-shift.task-param.js';
import {type CloseShiftTaskResult, isCloseShiftTaskResult} from './types/close-shift.task-result.js';

export default class AtolRpc extends Fptr10 {
	public readonly processJsonPromisified;

	constructor() {
		super();

		this.processJsonPromisified = promisify(this.processJsonAsync.bind(this));
	}

	async openShift(params: OpenShiftTaskParam): Promise<OpenShiftTaskResult> {
		const jsonTask: JsonTask<OpenShiftTaskParam> = {...params, type: JsonTaskType.openShift};
		return this.processJsonTask(jsonTask, isOpenShiftTaskResult);
	}

	async closeShift(params: CloseShiftTaskParam): Promise<CloseShiftTaskResult> {
		const jsonTask: JsonTask<CloseShiftTaskParam> = {...params, type: JsonTaskType.closeShift};
		return this.processJsonTask(jsonTask, isCloseShiftTaskResult);
	}

	async processJsonTask<P extends Record<string, any>, R>(task: JsonTask<P>, isR: (v: unknown) => v is R): Promise<R> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const result = await this.processJsonPromisified(task);
		if (!isR(result)) {
			throw new TypeError('Invalid return value type');
		}

		return result;
	}
}
