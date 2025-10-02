import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import {type DeviceKeyValue, isDeviceKeyValue} from './device-parameters.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';

export type SetDeviceParametersTask = JsonTask & {
  type: JsonTaskType.setDeviceParameters;
  deviceParameters: DeviceKeyValue[];
};

export const isSetDeviceParametersTask = structureValidator<SetDeviceParametersTask>({
  type: isEqual(JsonTaskType.setDeviceParameters),
  deviceParameters: arrayTypeGuard(isDeviceKeyValue),
});
