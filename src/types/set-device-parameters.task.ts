import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import { type DeviceParameter, isDeviceParameter } from './device-parameters.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';

export type SetDeviceParametersTask = JsonTask & {
  type: JsonTaskType.setDeviceParameters;
  deviceParameters: DeviceParameter[];
};

export const isSetDeviceParametersTask = structureValidator<SetDeviceParametersTask>({
  type: isEqual(JsonTaskType.setDeviceParameters),
  deviceParameters: arrayTypeGuard(isDeviceParameter),
});
