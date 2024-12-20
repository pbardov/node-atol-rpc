import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
export const isOfdExchangeStatusTask = structureValidator({
    type: isEqual(JsonTaskType.ofdExchangeStatus),
});
