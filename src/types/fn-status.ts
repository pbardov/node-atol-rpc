import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {type FnInfoWarnings, isFnInfoWarnings} from './fn-info.js';

export type FnStatus = {
	fiscalDocumentNumber: number;
	fiscalReceiptNumber: number;
	warnings: FnInfoWarnings;
};

export const isFnStatus = structureValidator<FnStatus>({
	fiscalDocumentNumber: isNumber,
	fiscalReceiptNumber: isNumber,
	warnings: isFnInfoWarnings,
});
