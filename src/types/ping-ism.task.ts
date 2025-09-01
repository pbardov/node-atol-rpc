import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type PingIsmTask = {
    type: JsonTaskType.pingIsm;
};

export const isPingIsmTask = structureValidator<PingIsmTask>({
    type: isEqual(JsonTaskType.pingIsm),
});
