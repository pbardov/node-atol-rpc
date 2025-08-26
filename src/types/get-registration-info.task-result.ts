import { type OrganizationInfo, isOrganizationInfo } from './organization-info.js';
import { type DeviceParams, isDeviceParams } from './device-params.js';
import { type OfdParams, isOfdParams } from './ofd-params.js';
import structureValidator from '../common/types/structure-validator.js';

// Define the GetRegistrationInfoTaskResult type
export type GetRegistrationInfoTaskResult = {
	organization: OrganizationInfo;
	device: DeviceParams;
	ofd: OfdParams;
};

// Create a type guard for GetRegistrationInfoTaskResult
export const isGetRegistrationInfoTaskResult = structureValidator<GetRegistrationInfoTaskResult>({
	organization: isOrganizationInfo,
	device: isDeviceParams,
	ofd: isOfdParams,
});
