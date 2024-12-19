import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import { isFnInfoWarnings } from './fn-info.js';
export const isFnStatus = structureValidator({
    fiscalDocumentNumber: isNumber,
    fiscalReceiptNumber: isNumber,
    warnings: isFnInfoWarnings,
});
