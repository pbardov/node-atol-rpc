import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetMcuTask = JsonTask & {
	type: JsonTaskType.getMcu;
};

export const isGetMcuTask = structureValidator<GetMcuTask>({
	type: (v: unknown): v is JsonTaskType.getMcu => v === JsonTaskType.getMcu,
});
