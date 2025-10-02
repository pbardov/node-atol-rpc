import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import type {JsonTask} from './json-task.js';

export type IsmExchangeStatusTask = JsonTask & {
    type: JsonTaskType.ismExchangeStatus;
};

export const isIsmExchangeStatusTask = structureValidator<IsmExchangeStatusTask>({
    type: isEqual(JsonTaskType.ismExchangeStatus)
});
