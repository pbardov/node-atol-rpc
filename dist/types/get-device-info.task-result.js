import { isDeviceInfo } from './device-info.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetDeviceInfoTaskResult = structureValidator({
    deviceInfo: isDeviceInfo,
});
