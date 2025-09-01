import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type ClearMarkingCodeValidationTask = {
    type: JsonTaskType.clearMarkingCodeValidationResult;
};

export const isClearMarkingCodeValidationTask = structureValidator<ClearMarkingCodeValidationTask>({
    type: isEqual(JsonTaskType.clearMarkingCodeValidationResult),
});
