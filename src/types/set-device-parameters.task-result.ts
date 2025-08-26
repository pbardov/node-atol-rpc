import structureValidator from '../common/types/structure-validator.js';
import { type DeviceParameters, isDeviceParameters } from './device-parameters.js';

export type SetDeviceParametersTaskResult = {
  deviceParameters: DeviceParameters;
};

export const isSetDeviceParametersTaskResult = structureValidator<SetDeviceParametersTaskResult>({
  deviceParameters: isDeviceParameters,
});
