import AtolRpcBase from './atol-rpc-base.js';
import {type GetDeviceStatusTaskResult} from './types/get-device-status.task-result.js';
import {JsonTaskType} from './types/json-task-type.js';
import {type GetDeviceInfoTaskResult} from './types/get-device-info.task-result.js';
import {type GetMcuTaskResult} from './types/get-mcu.task-result.js';
import {type GetCashDrawerStatusTaskResult} from './types/get-cash-drawer-status.task-result.js';
import {type GetShiftStatusTaskResult} from './types/get-shift-status.task-result.js';
import {type GetFnInfoTaskResult} from './types/get-fn-info.task-result.js';
import {type GetFnStatusTaskResult} from './types/get-fn-status.task-result.js';
import {type OfdExchangeStatusTaskResult} from './types/ofd-exchange-status.task-result.js';
import {type GetShiftTotalsTaskResult} from './types/get-shift-totals.task-result.js';
import {type GetOverallTotalsTaskResult} from './types/get-overall-totals.task-result.js';
import {type GetDepartmentSumTaskResult} from './types/get-department-sum.task-result.js';
import {type JsonTaskParam} from './types/json-task.js';
import {type ReportXTask} from './types/report-x.task.js';
import {type VoidTaskResult} from './types/void.task-result.js';

export default class AtolRpc extends AtolRpcBase {
	async getDeviceStatus(): Promise<GetDeviceStatusTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getDeviceStatus});
	}

	async getDeviceInfo(): Promise<GetDeviceInfoTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getDeviceInfo});
	}

	async getMcu(): Promise<GetMcuTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getMcu});
	}

	async getCashDrawerStatus(): Promise<GetCashDrawerStatusTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getCashDrawerStatus});
	}

	async getShiftStatus(): Promise<GetShiftStatusTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getShiftStatus});
	}

	async getFnInfo(): Promise<GetFnInfoTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getFnInfo});
	}

	async getFnStatus(): Promise<GetFnStatusTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getFnStatus});
	}

	async ofdExchangeStatus(): Promise<OfdExchangeStatusTaskResult> {
		return this.processJsonTask({type: JsonTaskType.ofdExchangeStatus});
	}

	async getShiftTotals(): Promise<GetShiftTotalsTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getShiftTotals});
	}

	async getOverallTotals(): Promise<GetOverallTotalsTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getOverallTotals});
	}

	async getDepartmentSum(): Promise<GetDepartmentSumTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getDepartmentSum});
	}

	async continuePrint(): Promise<void> {
		return this.processJsonTask({type: JsonTaskType.continuePrint});
	}

	async printLastReceiptCopy(): Promise<void> {
		return this.processJsonTask({type: JsonTaskType.printLastReceiptCopy});
	}

	async reportX(param: JsonTaskParam<ReportXTask>): Promise<VoidTaskResult> {
		return this.processJsonTask({...param, type: JsonTaskType.reportX});
	}
}
