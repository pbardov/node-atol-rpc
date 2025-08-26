import type { JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import { isOperator, type Operator } from './operator.js';
import { type OrganizationInfo, isOrganizationInfo } from './organization-info.js';
import { type DeviceParams, isDeviceParams } from './device-params.js';
import { type OfdParams, isOfdParams } from './ofd-params.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import isEqual from '../common/types/is-equal.js';
import isNumber from '../common/types/is-number.js';

export type RegistrationTask = JsonTask & {
  type: JsonTaskType.registration;
  operator: Operator;
  organization: OrganizationInfo;
  device: DeviceParams;
  ofd: OfdParams;
};

export type FnChangeTask = JsonTask & {
  type: JsonTaskType.fnChange;
  operator: Operator;
  organization: OrganizationInfo;
  device: DeviceParams;
  ofd: OfdParams;
  reason?: string;
  changeInfoReasons?: number[];
};

export type ChangeRegistrationParametersTask = JsonTask & {
  type: JsonTaskType.changeRegistrationParameters;
  operator: Operator;
  organization: OrganizationInfo;
  device: DeviceParams;
  ofd: OfdParams;
  reason?: string;
  changeInfoReasons?: number[];
};

export const isRegistrationTask = structureValidator<RegistrationTask>({
  type: isEqual(JsonTaskType.registration),
  operator: isOperator,
  organization: isOrganizationInfo,
  device: isDeviceParams,
  ofd: isOfdParams
});

export const isFnChangeTask = structureValidator<FnChangeTask>({
  type: isEqual(JsonTaskType.fnChange),
  operator: isOperator,
  organization: isOrganizationInfo,
  device: isDeviceParams,
  ofd: isOfdParams,
  reason: makeOpt(isString),
  changeInfoReasons: makeOpt(arrayTypeGuard(isNumber)),
});

export const isChangeRegistrationParametersTask = structureValidator<ChangeRegistrationParametersTask>({
  type: isEqual(JsonTaskType.changeRegistrationParameters),
  operator: isOperator,
  organization: isOrganizationInfo,
  device: isDeviceParams,
  ofd: isOfdParams,
  reason: makeOpt(isString),
  changeInfoReasons: makeOpt(arrayTypeGuard(isNumber)),
});
