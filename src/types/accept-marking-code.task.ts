import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type AcceptMarkingCodeTask = {
    type: JsonTaskType.acceptMarkingCode;
};

export const isAcceptMarkingCodeTask = structureValidator<AcceptMarkingCodeTask>({
    type: isEqual(JsonTaskType.acceptMarkingCode),
});
