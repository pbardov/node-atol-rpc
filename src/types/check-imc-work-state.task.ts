import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type CheckImcWorkStateTask = JsonTask & {
    type: JsonTaskType.checkImcWorkState;
};

export const isCheckImcWorkStateTask = structureValidator<CheckImcWorkStateTask>({
    type: isEqual(JsonTaskType.checkImcWorkState),
});
