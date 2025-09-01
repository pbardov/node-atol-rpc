import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type IsmExchangeStatusTask = {
    type: JsonTaskType.ismExchangeStatus;
};

export const isIsmExchangeStatusTask = structureValidator<IsmExchangeStatusTask>({
    type: isEqual(JsonTaskType.ismExchangeStatus)
});
