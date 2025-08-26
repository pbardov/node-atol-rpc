import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import isNumber from '../common/types/is-number.js';

export type GetDeviceParametersTask = JsonTask & {
  type: JsonTaskType.getDeviceParameters;
  keys: number[];
};

export const isGetDeviceParametersTask = structureValidator<GetDeviceParametersTask>({
  type: isEqual(JsonTaskType.getDeviceParameters),
  keys: arrayTypeGuard(isNumber),
});
