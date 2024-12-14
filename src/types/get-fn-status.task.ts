import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetFnStatusTask = JsonTask & {
	type: JsonTaskType.getFnStatus;
};

export const isGetFnStatusTask = structureValidator<GetFnStatusTask>({
	type: (v: unknown): v is JsonTaskType.getFnStatus => v === JsonTaskType.getFnStatus,
});
