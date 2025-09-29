import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import type {JsonTaskMap} from './json-task.map.js';
import type {JsonTaskResultMap} from './json-task-result.map.js';
import {jsonTaskTypeGuards} from './json-task.guard.js';
import {jsonTaskResultTypeGuards} from './json-task-result.guard.js';

export type JsonTask = {
	type: JsonTaskType;
};

export type JsonTaskParam<P> = Omit<P, 'type'>;

export const isJsonTask = structureValidator<JsonTask>({
	type: isJsonTaskType,
});

type IsEmptyObject<T> = keyof T extends never ? true : false;
type ArgsFor<T> = IsEmptyObject<T> extends true ? [] : [T];

export type JsonTaskDriver = {
	[K in keyof JsonTaskMap]: (...args: ArgsFor<JsonTaskParam<JsonTaskMap[K]>>) => Promise<JsonTaskResultMap[K]>;
};

export {JsonTaskMap, JsonTaskResultMap, jsonTaskTypeGuards, jsonTaskResultTypeGuards};
