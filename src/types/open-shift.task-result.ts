import {isIsoDateString, type IsoDateString} from '../common/types/iso-date-string.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import isOpt, {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';

export type OpenShiftTaskResult = {
	fiscalDocumentNumber: number;
	fiscalDocumentSign: string;
	fiscalDocumentDateTime: IsoDateString;
	shiftNumber: number;
	fnNumber: string;
	registrationNumber: string;
	fnsUrl: string;
	notPrinted?: boolean;
};

export const isOpenShiftTaskResult = structureValidator<OpenShiftTaskResult>({
	fiscalDocumentNumber: isNumber,
	fiscalDocumentSign: isString,
	fiscalDocumentDateTime: isIsoDateString,
	shiftNumber: isNumber,
	fnNumber: isString,
	registrationNumber: isString,
	fnsUrl: isString,
	notPrinted: makeOpt(isBoolean),
});
