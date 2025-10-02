import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type DeclineMarkingCodeTask = JsonTask & {
    type: JsonTaskType.declineMarkingCode;
};

export const isDeclineMarkingCodeTask = structureValidator<DeclineMarkingCodeTask>({
    type: isEqual(JsonTaskType.declineMarkingCode),
});
