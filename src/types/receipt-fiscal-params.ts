import {type FiscalParams, fiscalParamsValidator} from './fiscal-params.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export type ReceiptFiscalParams = FiscalParams & {
    fiscalReceiptNumber: number;
    total: number;
};

export const isReceiptFiscalParams = structureValidator<ReceiptFiscalParams>({
    ...fiscalParamsValidator,
    fiscalReceiptNumber: isNumber,
    total: isNumber
});
