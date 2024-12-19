import { isDeviceStatus } from './device-status.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetDeviceStatusTaskResult = structureValidator({
    deviceStatus: isDeviceStatus,
});
