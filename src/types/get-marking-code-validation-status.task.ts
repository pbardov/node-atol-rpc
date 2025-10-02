import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type GetMarkingCodeValidationStatusTask = JsonTask & {
    type: JsonTaskType.getMarkingCodeValidationStatus;
};

export const isGetMarkingCodeValidationStatusTask = structureValidator<GetMarkingCodeValidationStatusTask>({
    type: isEqual(JsonTaskType.getMarkingCodeValidationStatus),
});
