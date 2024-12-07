import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type ContinuePrintTask = JsonTask & {
	type: JsonTaskType.continuePrint;
};

export const isContinuePrint = structureValidator<ContinuePrintTask>({
	type: (v: unknown): v is JsonTaskType.continuePrint => v === JsonTaskType.continuePrint,
});
