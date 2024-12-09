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
import {
	type BuyReturnTask, type BuyTask, type SellReturnTask, type SellTask,
} from './types/fiscal.task.js';
import {
	type BuyReturnTaskResult,
	type BuyTaskResult,
	type SellReturnTaskResult,
	type SellTaskResult,
} from './types/fiscal.task-result.js';
import {type TypeGuardDetail} from './common/types/type-guard.js';
import {TypeGuardError} from './common/types/type-guard.error.js';
import {type ContinuePrintTask} from './types/continue-print.task.js';
import {JsonTaskType} from './types/json-task-type.js';
import {type PrintLastReceiptCopyTask} from './types/print-last-receipt-copy.task.js';
import {type GetDeviceStatusTask} from './types/get-device-status.task.js';
import {type GetDeviceStatusTaskResult} from './types/get-device-status.task-result.js';

export default class AtolRpc extends Fptr10 implements JsonTaskDriver {
	public readonly processJsonPromisified;

	constructor() {
		super();

		this.processJsonPromisified = promisify(this.processJsonAsync.bind(this));
	}

	async continuePrint(params: ContinuePrintTask = {type: JsonTaskType.continuePrint}): Promise<void> {
		return this.processJsonTask(params);
	}

	async printLastReceiptCopy(params: PrintLastReceiptCopyTask = {type: JsonTaskType.printLastReceiptCopy}): Promise<void> {
		return this.processJsonTask(params);
	}

	async getDeviceStatus(params: GetDeviceStatusTask = {type: JsonTaskType.getDeviceStatus}): Promise<GetDeviceStatusTaskResult> {
		return this.processJsonTask(params);
	}

	async openShift(params: OpenShiftTask): Promise<ShiftTaskResult> {
		return this.processJsonTask(params);
	}

	async closeShift(params: CloseShiftTask): Promise<CloseShiftTaskResult> {
		return this.processJsonTask(params);
	}

	async sell(params: SellTask): Promise<SellTaskResult> {
		return this.processJsonTask(params);
	}

	async buy(params: BuyTask): Promise<BuyTaskResult> {
		return this.processJsonTask(params);
	}

	async sellReturn(params: SellReturnTask): Promise<SellReturnTaskResult> {
		return this.processJsonTask(params);
	}

	async buyReturn(params: BuyReturnTask): Promise<BuyReturnTaskResult> {
		return this.processJsonTask(params);
	}

	async processJsonTask<T extends keyof JsonTaskMap, R = JsonTaskResultMap[T]>(task: JsonTaskMap[T]): Promise<R> {
		type Param = JsonTaskMap[T];
		type Result = R;

		const paramTypeGuard = jsonTaskTypeGuards[task.type] as TypeGuardDetail<Param> | undefined;
		const resultTypeGuard = jsonTaskResultTypeGuards[task.type] as TypeGuardDetail<Result> | undefined;

		if (typeof paramTypeGuard !== 'function' || typeof resultTypeGuard !== 'function') {
			throw new EvalError(`Method ${task.type} not implemented`);
		}

		let validationErrors = {};
		if (!paramTypeGuard(task, validationErrors)) {
			throw new TypeGuardError('Invalid input params type', {cause: validationErrors});
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const result = await this.processJsonPromisified(task);
		validationErrors = {};
		if (!resultTypeGuard(result, validationErrors)) {
			throw new TypeGuardError('Invalid return value type', {cause: validationErrors});
		}

		return result;
	}
}
