import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetShiftStatusTask = JsonTask & {
	type: JsonTaskType.getShiftStatus;
};

export const isGetShiftStatusTask = structureValidator<GetShiftStatusTask>({
	type: (v: unknown): v is JsonTaskType.getShiftStatus => v === JsonTaskType.getShiftStatus,
});
