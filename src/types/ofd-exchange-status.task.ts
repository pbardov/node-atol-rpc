import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

export type OfdExchangeStatusTask = JsonTask & {
	type: JsonTaskType.ofdExchangeStatus;
};

export const isOfdExchangeStatusTask = structureValidator<OfdExchangeStatusTask>({
	type: isEqual(JsonTaskType.ofdExchangeStatus),
});
