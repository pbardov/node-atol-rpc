import structureValidator from '../common/types/structure-validator.js';
import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';

export type FnInfoWarnings = {
	memoryOverflow: boolean;
	needReplacement: boolean;
	ofdTimeout: boolean;
	resourceExhausted: boolean;
	criticalError: boolean;
};

export const isFnInfoWarnings = structureValidator<FnInfoWarnings>({
	memoryOverflow: isBoolean,
	needReplacement: isBoolean,
	ofdTimeout: isBoolean,
	resourceExhausted: isBoolean,
	criticalError: isBoolean,
});

export type FnInfo = {
	serial: string;
	version: string;
	execution: string;
	numberOfRegistrations: number;
	registrationsRemaining: number;
	validityDate: string;
	ffdVersion: string;
	fnContainsKeysUpdaterServerUri: boolean;
	fnFfdVersion: string;
	livePhase: string;
	warnings: FnInfoWarnings;
};

export const isFnInfo = structureValidator<FnInfo>({
	serial: isString,
	version: isString,
	execution: isString,
	numberOfRegistrations: isNumber,
	registrationsRemaining: isNumber,
	validityDate: isString,
	ffdVersion: isString,
	fnContainsKeysUpdaterServerUri: isBoolean,
	fnFfdVersion: isString,
	livePhase: isString,
	warnings: isFnInfoWarnings,
});
