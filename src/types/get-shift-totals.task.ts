import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type GetShiftTotalsTask = JsonTask & {
	type: JsonTaskType.getShiftTotals;
};

export const isGetShiftTotalsTask = structureValidator<GetShiftTotalsTask>({
	type: isEqual(JsonTaskType.getShiftTotals),
});
