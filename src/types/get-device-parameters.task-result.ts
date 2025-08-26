import structureValidator from '../common/types/structure-validator.js';
import { type DeviceParameters, isDeviceParameters } from './device-parameters.js';

export type GetDeviceParametersTaskResult = {
  deviceParameters: DeviceParameters;
};

export const isGetDeviceParametersTaskResult = structureValidator<GetDeviceParametersTaskResult>({
  deviceParameters: isDeviceParameters,
});
