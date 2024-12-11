import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetCashDrawerStatusTask = JsonTask & {
	type: JsonTaskType.getCashDrawerStatus;
};

export const isGetCashDrawerStatusTask = structureValidator<GetCashDrawerStatusTask>({
	type: (v: unknown): v is JsonTaskType.getCashDrawerStatus => v === JsonTaskType.getCashDrawerStatus,
});
