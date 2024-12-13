import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetFnInfoTask = JsonTask & {
	type: JsonTaskType.getFnInfo;
};

export const isGetFnInfoTask = structureValidator<GetFnInfoTask>({
	type: (v: unknown): v is JsonTaskType.getFnInfo => v === JsonTaskType.getFnInfo,
});
