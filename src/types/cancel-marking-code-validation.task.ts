import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type CancelMarkingCodeValidationTask = JsonTask & {
    type: JsonTaskType.cancelMarkingCodeValidation;
};

export const isCancelMarkingCodeValidationTask = structureValidator<CancelMarkingCodeValidationTask>({
    type: isEqual(JsonTaskType.cancelMarkingCodeValidation),
});
