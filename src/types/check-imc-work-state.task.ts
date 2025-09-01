import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type CheckImcWorkStateTask = {
    type: JsonTaskType.checkImcWorkState;
};

export const isCheckImcWorkStateTask = structureValidator<CheckImcWorkStateTask>({
    type: isEqual(JsonTaskType.checkImcWorkState),
});
