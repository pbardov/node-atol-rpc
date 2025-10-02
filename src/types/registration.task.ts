import type { JsonTask } from './json-task.js';
import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import { isOperator, type Operator } from './operator.js';
import { type OrganizationInfo, isOrganizationInfo } from './organization-info.js';
import { type DeviceParams, isDeviceParams } from './device-params.js';
import { type OfdParams, isOfdParams } from './ofd-params.js';
import structureValidator from '../common/types/structure-validator.js';
import {isRegChangeReason, type RegChangeReason} from './reg-change-reason.js';
import {isIsmParams, type IsmParams} from './ism-params.js';
import {type AdditionalAttribute, isAdditionalAttribute} from './additional-attribute.js';
import type {RequiredProps, UnionFromArray} from '../common/types/utility.js';
import {makeOpt} from '../common/types/is-opt.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';

export const registrationTaskTypes = [JsonTaskType.registration, JsonTaskType.fnChange, JsonTaskType.changeRegistrationParameters] as const;
export type RegistrationTaskTypes = UnionFromArray<typeof registrationTaskTypes>;
export const isRegistrationTaskType = <T extends RegistrationTaskTypes>(...i: T[]) => (t: unknown): t is T =>
    isJsonTaskType(t) && registrationTaskTypes.includes(t as T) && i.includes(t as T);

type RegistrationTaskGeneric<T extends RegistrationTaskTypes = RegistrationTaskTypes> = JsonTask & {
  type: T;
  operator?: Operator;
  reason?: RegChangeReason;
  changeInfoReasons?: number[];
  organization?: OrganizationInfo;
  device?: DeviceParams;
  ofd?: OfdParams;
  ism?: IsmParams;
  electronically?: boolean;
  additionalAttribute?: AdditionalAttribute;
};

export type RegistrationTask = RegistrationTaskGeneric<JsonTaskType.registration>;
export type FnChangeTask = RegistrationTaskGeneric<JsonTaskType.fnChange>;
export type ChangeRegistrationParametersTask = RequiredProps<RegistrationTaskGeneric<JsonTaskType.changeRegistrationParameters>, 'reason' | 'changeInfoReasons'>;

const validator = {
  operator: makeOpt(isOperator),
  reason: makeOpt(isRegChangeReason),
  changeInfoReasons: makeOpt(arrayTypeGuard(isNumber)),
  organization: makeOpt(isOrganizationInfo),
  device: makeOpt(isDeviceParams),
  ofd: makeOpt(isOfdParams),
  ism: makeOpt(isIsmParams),
  electronically: makeOpt(isBoolean),
  additionalAttribute: makeOpt(isAdditionalAttribute),
};
export const isRegistrationTask = structureValidator<RegistrationTask>({
  type: isRegistrationTaskType(JsonTaskType.registration),
  ...validator
});

export const isFnChangeTask = structureValidator<FnChangeTask>({
  type: isRegistrationTaskType(JsonTaskType.fnChange),
  ...validator
});

export const isChangeRegistrationParametersTask = structureValidator<ChangeRegistrationParametersTask>({
  type: isRegistrationTaskType(JsonTaskType.changeRegistrationParameters),
  ...validator,
  reason: isRegChangeReason,
  changeInfoReasons: arrayTypeGuard(isNumber),
});
