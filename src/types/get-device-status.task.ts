import {type JsonTask} from './json-task.js';
import {JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetDeviceStatusTask = JsonTask & {
	type: JsonTaskType.getDeviceStatus;
};

export const isGetDeviceStatusTask = structureValidator<GetDeviceStatusTask>({
	type: (v: unknown): v is JsonTaskType.getDeviceStatus => v === JsonTaskType.getDeviceStatus,
});
