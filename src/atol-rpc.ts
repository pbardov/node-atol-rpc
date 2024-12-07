import {Fptr10} from 'node-atol-wrapper';
import {promisify} from 'node:util';
import {type CloseShiftTask, type OpenShiftTask} from './types/shift.task.js';
import {
	type JsonTaskDriver,
	type JsonTaskMap,
	type JsonTaskResultMap,
	jsonTaskResultTypeGuards,
	jsonTaskTypeGuards,
} from './types/json-task.js';
import {type CloseShiftTaskResult, type ShiftTaskResult} from './types/shift.task-result.js';

export default class AtolRpc extends Fptr10 implements JsonTaskDriver {
	public readonly processJsonPromisified;

	constructor() {
		super();

		this.processJsonPromisified = promisify(this.processJsonAsync.bind(this));
	}

	async openShift(params: OpenShiftTask): Promise<ShiftTaskResult> {
		return this.processJsonTask(params);
	}

	async closeShift(params: CloseShiftTask): Promise<CloseShiftTaskResult> {
		return this.processJsonTask(params);
	}

	async processJsonTask<T extends keyof JsonTaskMap>(task: JsonTaskMap[T]): Promise<JsonTaskResultMap[T]> {
		const paramTypeGuard = jsonTaskTypeGuards[task.type];
		const resultTypeGuard = jsonTaskResultTypeGuards[task.type];

		if (typeof paramTypeGuard !== 'function' || typeof resultTypeGuard !== 'function') {
			throw new EvalError(`Method ${task.type} not implemented`);
		}

		const validationErrors = {};
		if (!paramTypeGuard(task, validationErrors)) {
			throw new TypeError('Invalid input params');
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const result = await this.processJsonPromisified(task);
		if (!resultTypeGuard(result, validationErrors)) {
			throw new TypeError('Invalid return value type');
		}

		return result;
	}
}
