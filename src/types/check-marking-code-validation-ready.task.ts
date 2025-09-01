import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type CheckMarkingCodeValidationReadyTask = {
    type: JsonTaskType.checkMarkingCodeValidationsReady;
};

export const isCheckMarkingCodeValidationReadyTask = structureValidator<CheckMarkingCodeValidationReadyTask>({
    type: isEqual(JsonTaskType.checkMarkingCodeValidationsReady),
});
