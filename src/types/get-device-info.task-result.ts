import {type DeviceInfo, isDeviceInfo} from './device-info.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetDeviceInfoTaskResult = {
	deviceInfo: DeviceInfo;
};

export const isGetDeviceInfoTaskResult = structureValidator<GetDeviceInfoTaskResult>({
	deviceInfo: isDeviceInfo,
});
