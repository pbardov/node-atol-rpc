import {type JsonTask} from './json-task.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import {JsonTaskType} from './json-task-type.js';

export type GetOverallTotalsTask = JsonTask & {
	type: JsonTaskType.getOverallTotals;
};

export const isGetOverallTotalsTask = structureValidator<GetOverallTotalsTask>({
	type: isEqual(JsonTaskType.getOverallTotals),
});
