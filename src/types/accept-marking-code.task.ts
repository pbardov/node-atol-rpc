import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type AcceptMarkingCodeTask = JsonTask & {
    type: JsonTaskType.acceptMarkingCode;
};

export const isAcceptMarkingCodeTask = structureValidator<AcceptMarkingCodeTask>({
    type: isEqual(JsonTaskType.acceptMarkingCode),
});
