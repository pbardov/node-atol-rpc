import {isJsonTaskType, JsonTaskType} from './json-task-type.js';

export type JsonTask<P extends Record<string, any> > = {
	type: JsonTaskType
} & P;

export function isJsonTask(v: unknown): v is JsonTask<Record<string, any>> {
	const mb = v as JsonTask<Record<string, any>> | undefined;
	return typeof mb === 'object'
		&& mb
		&& isJsonTaskType(mb.type);
}
