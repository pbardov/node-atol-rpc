import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type CheckMarkingCodeValidationReadyTask = JsonTask & {
    type: JsonTaskType.checkMarkingCodeValidationsReady;
};

export const isCheckMarkingCodeValidationReadyTask = structureValidator<CheckMarkingCodeValidationReadyTask>({
    type: isEqual(JsonTaskType.checkMarkingCodeValidationsReady),
});
