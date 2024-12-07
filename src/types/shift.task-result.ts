import {isIsoDateString, type IsoDateString} from '../common/types/iso-date-string.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';
import structureValidator from '../common/types/structure-validator.js';
import {type TypeGuardDetail} from '../common/types/type-guard.js';
import {isResultWarnings, type ResultWarnings} from './result-warnings.js';

export type ShiftTaskResult = {
	fiscalDocumentNumber: number;
	fiscalDocumentSign: string;
	fiscalDocumentDateTime: IsoDateString;
	shiftNumber: number;
	fnNumber: string;
	registrationNumber: string;
	fnsUrl: string;
	warnings?: ResultWarnings;
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
	warnings: makeOpt(isResultWarnings),
});
export const isOpenShiftTaskResult: TypeGuardDetail<OpenShiftTaskResult> = isShiftTaskResult;
export const isCloseShiftTaskResult: TypeGuardDetail<CloseShiftTaskResult> = isShiftTaskResult;
