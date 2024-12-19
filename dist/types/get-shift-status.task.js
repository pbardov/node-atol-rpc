import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetShiftStatusTask = structureValidator({
    type: (v) => v === JsonTaskType.getShiftStatus,
});
