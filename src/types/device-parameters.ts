import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';

export type DeviceParameter = {
  key: number;
  value: string;
  errorCode?: number;
  errorDescription?: string;
};

export type DeviceParameters = DeviceParameter[];

export const isDeviceParameter = structureValidator<DeviceParameter>({
  key: isNumber,
  value: isString,
  errorCode: makeOpt(isNumber),
  errorDescription: makeOpt(isString),
});

export const isDeviceParameters = arrayTypeGuard(isDeviceParameter);
