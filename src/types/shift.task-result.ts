import {isIsoDateString, type IsoDateString} from '../common/types/iso-date-string.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import isOpt, {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';
import {TypeGuardDetail} from '../common/types/type-guard.js';

export type Warnings = {
	notPrinted?: boolean;
};

export const isWarnings = structureValidator<Warnings>({
	notPrinted: makeOpt(isBoolean),
});

export type ShiftTaskResult = {
	fiscalDocumentNumber: number;
	fiscalDocumentSign: string;
	fiscalDocumentDateTime: IsoDateString;
	shiftNumber: number;
	fnNumber: string;
	registrationNumber: string;
	fnsUrl: string;
	warnings?: Warnings;
};
export type OpenShiftTaskResult = ShiftTaskResult;
export type CloseShiftTaskResult = ShiftTaskResult;

export const isShiftTaskResult = structureValidator<ShiftTaskResult>({
	fiscalDocumentNumber: isNumber,
	fiscalDocumentSign: isString,
	fiscalDocumentDateTime: isIsoDateString,
	shiftNumber: isNumber,
	fnNumber: isString,
	registrationNumber: isString,
	fnsUrl: isString,
	warnings: makeOpt(isWarnings),
});
export const isOpenShiftTaskResult: TypeGuardDetail<OpenShiftTaskResult> = isShiftTaskResult;
export const isCloseShiftTaskResult: TypeGuardDetail<CloseShiftTaskResult> = isShiftTaskResult;
