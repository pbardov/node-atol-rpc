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
};

export type JsonTaskResultMap = {
	[JsonTaskType.continuePrint]: VoidTaskResult;
	[JsonTaskType.openShift]: ShiftTaskResult;
	[JsonTaskType.closeShift]: CloseShiftTaskResult;
	[JsonTaskType.sell]: SellTaskResult;
	[JsonTaskType.buy]: BuyTaskResult;
	[JsonTaskType.sellReturn]: SellReturnTaskResult;
	[JsonTaskType.buyReturn]: BuyReturnTaskResult;
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
} as const;

export const jsonTaskResultTypeGuards: TypeGuardMap<JsonTaskResultMap> = {
	[JsonTaskType.continuePrint]: isVoidTaskResult,
	[JsonTaskType.openShift]: isOpenShiftTaskResult,
	[JsonTaskType.closeShift]: isCloseShiftTaskResult,
	[JsonTaskType.sell]: isSellTaskResult,
	[JsonTaskType.buy]: isBuyTaskResult,
	[JsonTaskType.sellReturn]: isSellReturnTaskResult,
	[JsonTaskType.buyReturn]: isBuyReturnTaskResult,
};
