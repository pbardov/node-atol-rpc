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

export type JsonTask = {
	type: JsonTaskType;
};

export const isJsonTask = structureValidator<JsonTask>({
	type: isJsonTaskType,
});

export type JsonTaskMap = {
	[JsonTaskType.openShift]: OpenShiftTask;
	[JsonTaskType.closeShift]: CloseShiftTask;
};

export type JsonTaskResultMap = {
	[JsonTaskType.openShift]: ShiftTaskResult;
	[JsonTaskType.closeShift]: CloseShiftTaskResult;
};

export type JsonTaskDriver = {
	[K in keyof JsonTaskMap]: (p: JsonTaskMap[K]) => Promise<JsonTaskResultMap[K]>;
};

export const jsonTaskTypeGuards: TypeGuardMap<JsonTaskMap> = {
	[JsonTaskType.openShift]: isOpenShiftTask,
	[JsonTaskType.closeShift]: isCloseShiftTask,
} as const;

export const jsonTaskResultTypeGuards: TypeGuardMap<JsonTaskResultMap> = {
	[JsonTaskType.openShift]: isOpenShiftTaskResult,
	[JsonTaskType.closeShift]: isCloseShiftTaskResult,
};
