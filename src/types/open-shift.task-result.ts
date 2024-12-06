import {isIsoDateString, type IsoDateString} from '../common/types/iso-date-string.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import isOpt from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

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

export function isOpenShiftTaskResult(v: unknown): v is OpenShiftTaskResult {
	const mb = v as OpenShiftTaskResult | undefined;
	return Boolean(mb)
		&& typeof mb === 'object'
		&& isNumber(mb.fiscalDocumentNumber)
		&& isString(mb.fiscalDocumentSign)
		&& isIsoDateString(mb.fiscalDocumentDateTime)
		&& isNumber(mb.shiftNumber)
		&& isString(mb.fnNumber)
		&& isString(mb.registrationNumber)
		&& isString(mb.fnsUrl)
		&& isOpt(mb.notPrinted, isBoolean);
}
