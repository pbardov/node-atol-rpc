import {Fptr10} from 'node-atol-wrapper';
import {promisify} from 'node:util';
import {OpenShiftTaskParam} from './types/open-shift.task-param.js';
import {JsonTask} from './types/json-task.js';
import {JsonTaskType} from './types/json-task-type.js';
import {isOpenShiftTaskResult, OpenShiftTaskResult} from './types/open-shift.task-result.js';

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

	async closeShift() {
		//
	}

	async processJsonTask<P extends Record<string, any>, R>(task: JsonTask<P>, isR: (v: unknown) => v is R): Promise<R> {
		const result = await this.processJsonPromisified(task);
		if (!isR(result)) {
			throw new TypeError('Invalid return value type');
		}

		return result;
	}
}
