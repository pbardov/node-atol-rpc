import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type GetDepartmentSumTask = JsonTask & {
	type: JsonTaskType.getDepartmentSum;
};

export const isGetDepartmentSumTask = structureValidator<GetDepartmentSumTask>({
	type: isEqual(JsonTaskType.getDepartmentSum),
});
