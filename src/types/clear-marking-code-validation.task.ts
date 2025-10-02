import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type ClearMarkingCodeValidationTask = JsonTask & {
    type: JsonTaskType.clearMarkingCodeValidationResult;
};

export const isClearMarkingCodeValidationTask = structureValidator<ClearMarkingCodeValidationTask>({
    type: isEqual(JsonTaskType.clearMarkingCodeValidationResult),
});
