import {type DeviceStatus, isDeviceStatus} from './device-status.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetDeviceStatusTaskResult = {
	deviceStatus: DeviceStatus;
};

export const isGetDeviceStatusTaskResult = structureValidator<GetDeviceStatusTaskResult>({
	deviceStatus: isDeviceStatus,
});
