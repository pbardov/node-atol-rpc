import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type CheckImcTimeTask = {
    type: JsonTaskType.checkImcTime;
};

export const isCheckImcTimeTask = structureValidator<CheckImcTimeTask>({
    type: isEqual(JsonTaskType.checkImcTime),
});
