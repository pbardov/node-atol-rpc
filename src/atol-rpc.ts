import AtolRpcBase from './atol-rpc-base.js';
import {type GetDeviceStatusTaskResult} from './types/get-device-status.task-result.js';
import {JsonTaskType} from './types/json-task-type.js';
import {type GetDeviceInfoTaskResult} from './types/get-device-info.task-result.js';

export default class AtolRpc extends AtolRpcBase {
	async getDeviceStatus(): Promise<GetDeviceStatusTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getDeviceStatus});
	}

	async getDeviceInfo(): Promise<GetDeviceInfoTaskResult> {
		return this.processJsonTask({type: JsonTaskType.getDeviceInfo});
	}

	async continuePrint(): Promise<void> {
		return this.processJsonTask({type: JsonTaskType.continuePrint});
	}

	async printLastReceiptCopy(): Promise<void> {
		return this.processJsonTask({type: JsonTaskType.printLastReceiptCopy});
	}
}
