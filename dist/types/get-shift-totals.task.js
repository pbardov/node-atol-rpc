import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
export const isGetShiftTotalsTask = structureValidator({
    type: isEqual(JsonTaskType.getShiftTotals),
});
