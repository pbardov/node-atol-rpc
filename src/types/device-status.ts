import {isShiftState, type ShiftState} from './shift-state.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isBoolean from '../common/types/is-boolean.js';

export type DeviceStatus = {
	currentDateTime: string;
	shift: ShiftState;
	blocked: boolean;
	coverOpened: boolean;
	paperPresent: boolean;
	fiscal: boolean;
	fnFiscal: boolean;
	fnPresent: boolean;
	cashDrawerOpened: boolean;
};

export const isDeviceStatus = structureValidator<DeviceStatus>({
	currentDateTime: isString,
	shift: isShiftState,
	blocked: isBoolean,
	coverOpened: isBoolean,
	paperPresent: isBoolean,
	fiscal: isBoolean,
	fnFiscal: isBoolean,
	fnPresent: isBoolean,
	cashDrawerOpened: isBoolean,
});
