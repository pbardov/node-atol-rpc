import { isJsonTaskType, JsonTaskType } from './json-task-type.js';
import { type JsonTask } from './json-task.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';

// Define the GetRegistrationInfoTask type extending JsonTask
export type GetRegistrationInfoTask = JsonTask & {
	type: JsonTaskType.getRegistrationInfo;
};

// Create a type guard for GetRegistrationInfoTask
export const isGetRegistrationInfoTask = structureValidator<GetRegistrationInfoTask>({
	type: isEqual(JsonTaskType.getRegistrationInfo),
});
