import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetDeviceInfoTask = JsonTask & {
	type: JsonTaskType.getDeviceInfo;
};

export const isGetDeviceInfoTask = structureValidator<GetDeviceInfoTask>({
	type: (v: unknown): v is JsonTaskType.getDeviceInfo => v === JsonTaskType.getDeviceInfo,
});
