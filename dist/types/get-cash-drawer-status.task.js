import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetCashDrawerStatusTask = structureValidator({
    type: (v) => v === JsonTaskType.getCashDrawerStatus,
});
