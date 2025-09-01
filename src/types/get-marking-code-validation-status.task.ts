import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type GetMarkingCodeValidationStatusTask = {
    type: JsonTaskType.getMarkingCodeValidationStatus;
};

export const isGetMarkingCodeValidationStatusTask = structureValidator<GetMarkingCodeValidationStatusTask>({
    type: isEqual(JsonTaskType.getMarkingCodeValidationStatus),
});
