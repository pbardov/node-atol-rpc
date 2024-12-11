import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import {
	type CloseShiftTask, isCloseShiftTask, isOpenShiftTask, type OpenShiftTask,
} from './shift.task.js';
import {
	type CloseShiftTaskResult,
	isCloseShiftTaskResult,
	isOpenShiftTaskResult,
	type ShiftTaskResult,
} from './shift.task-result.js';
import {type TypeGuardMap} from '../common/types/type-guard.js';
import structureValidator from '../common/types/structure-validator.js';
import {
	type BuyReturnTask,
	type BuyTask, isBuyReturnTask,
	isBuyTask,
	isSellReturnTask,
	isSellTask,
	type SellReturnTask,
	type SellTask,
} from './fiscal.task.js';
import {
	type BuyReturnTaskResult,
	type BuyTaskResult, isBuyReturnTaskResult, isBuyTaskResult, isSellReturnTaskResult,
	isSellTaskResult,
	type SellReturnTaskResult,
	type SellTaskResult,
} from './fiscal.task-result.js';
import {type ContinuePrintTask, isContinuePrint} from './continue-print.task.js';
import {isVoidTaskResult, type VoidTaskResult} from './void.task-result.js';
import {isPrintLastReceiptCopyTask, type PrintLastReceiptCopyTask} from './print-last-receipt-copy.task.js';
import {type GetDeviceStatusTask, isGetDeviceStatusTask} from './get-device-status.task.js';
import {type GetDeviceStatusTaskResult, isGetDeviceStatusTaskResult} from './get-device-status.task-result.js';
import {type GetDeviceInfoTask, isGetDeviceInfoTask} from './get-device-info.task.js';
import {type GetDeviceInfoTaskResult, isGetDeviceInfoTaskResult} from './get-device-info.task-result.js';
import {type GetMcuTask, isGetMcuTask} from './get-mcu.task.js';
import {type GetMcuTaskResult, isGetMcuTaskResult} from './get-mcu.task-result.js';
import {type GetCashDrawerStatusTask, isGetCashDrawerStatusTask} from './get-cash-drawer-status.task.js';
import {type GetCashDrawerStatusTaskResult, isGetCashDrawerStatusTaskResult} from './get-cash-drawer-status.task-result.js';

export type JsonTask = {
	type: JsonTaskType;
};

export const isJsonTask = structureValidator<JsonTask>({
	type: isJsonTaskType,
});

export type JsonTaskMap = {
	[JsonTaskType.continuePrint]: ContinuePrintTask;
	[JsonTaskType.openShift]: OpenShiftTask;
	[JsonTaskType.closeShift]: CloseShiftTask;
	[JsonTaskType.sell]: SellTask;
	[JsonTaskType.buy]: BuyTask;
	[JsonTaskType.sellReturn]: SellReturnTask;
	[JsonTaskType.buyReturn]: BuyReturnTask;
	[JsonTaskType.printLastReceiptCopy]: PrintLastReceiptCopyTask;
	[JsonTaskType.getDeviceStatus]: GetDeviceStatusTask;
	[JsonTaskType.getDeviceInfo]: GetDeviceInfoTask;
	[JsonTaskType.getMcu]: GetMcuTask;
	[JsonTaskType.getCashDrawerStatus]: GetCashDrawerStatusTask;
};

export type JsonTaskResultMap = {
	[JsonTaskType.continuePrint]: VoidTaskResult;
	[JsonTaskType.openShift]: ShiftTaskResult;
	[JsonTaskType.closeShift]: CloseShiftTaskResult;
	[JsonTaskType.sell]: SellTaskResult;
	[JsonTaskType.buy]: BuyTaskResult;
	[JsonTaskType.sellReturn]: SellReturnTaskResult;
	[JsonTaskType.buyReturn]: BuyReturnTaskResult;
	[JsonTaskType.printLastReceiptCopy]: VoidTaskResult;
	[JsonTaskType.getDeviceStatus]: GetDeviceStatusTaskResult;
	[JsonTaskType.getDeviceInfo]: GetDeviceInfoTaskResult;
	[JsonTaskType.getMcu]: GetMcuTaskResult;
	[JsonTaskType.getCashDrawerStatus]: GetCashDrawerStatusTaskResult;
};

export type JsonTaskDriver = {
	[K in keyof JsonTaskMap]: (p: JsonTaskMap[K]) => Promise<JsonTaskResultMap[K]>;
};

export const jsonTaskTypeGuards: TypeGuardMap<JsonTaskMap> = {
	[JsonTaskType.continuePrint]: isContinuePrint,
	[JsonTaskType.openShift]: isOpenShiftTask,
	[JsonTaskType.closeShift]: isCloseShiftTask,
	[JsonTaskType.sell]: isSellTask,
	[JsonTaskType.buy]: isBuyTask,
	[JsonTaskType.sellReturn]: isSellReturnTask,
	[JsonTaskType.buyReturn]: isBuyReturnTask,
	[JsonTaskType.printLastReceiptCopy]: isPrintLastReceiptCopyTask,
	[JsonTaskType.getDeviceStatus]: isGetDeviceStatusTask,
	[JsonTaskType.getDeviceInfo]: isGetDeviceInfoTask,
	[JsonTaskType.getMcu]: isGetMcuTask,
	[JsonTaskType.getCashDrawerStatus]: isGetCashDrawerStatusTask,
} as const;

export const jsonTaskResultTypeGuards: TypeGuardMap<JsonTaskResultMap> = {
	[JsonTaskType.continuePrint]: isVoidTaskResult,
	[JsonTaskType.openShift]: isOpenShiftTaskResult,
	[JsonTaskType.closeShift]: isCloseShiftTaskResult,
	[JsonTaskType.sell]: isSellTaskResult,
	[JsonTaskType.buy]: isBuyTaskResult,
	[JsonTaskType.sellReturn]: isSellReturnTaskResult,
	[JsonTaskType.buyReturn]: isBuyReturnTaskResult,
	[JsonTaskType.printLastReceiptCopy]: isVoidTaskResult,
	[JsonTaskType.getDeviceStatus]: isGetDeviceStatusTaskResult,
	[JsonTaskType.getDeviceInfo]: isGetDeviceInfoTaskResult,
	[JsonTaskType.getMcu]: isGetMcuTaskResult,
	[JsonTaskType.getCashDrawerStatus]: isGetCashDrawerStatusTaskResult,
};
