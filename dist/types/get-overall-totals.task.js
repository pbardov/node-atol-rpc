import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import { JsonTaskType } from './json-task-type.js';
export const isGetOverallTotalsTask = structureValidator({
    type: isEqual(JsonTaskType.getOverallTotals),
});
