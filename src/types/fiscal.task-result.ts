import {isResultWarnings, type ResultWarnings} from './result-warnings.js';
import structureValidator from '../common/types/structure-validator.js';
import {isReceiptFiscalParams, type ReceiptFiscalParams} from './receipt-fiscal-params.js';

export type FiscalTaskResult = {
	fiscalParams: ReceiptFiscalParams,
	warnings: ResultWarnings
};

export type SellTaskResult = FiscalTaskResult;
export type BuyTaskResult = FiscalTaskResult;
export type SellReturnTaskResult = FiscalTaskResult;
export type BuyReturnTaskResult = FiscalTaskResult;

export const isFiscalTaskResult = structureValidator<FiscalTaskResult>({
	fiscalParams: isReceiptFiscalParams,
	warnings: isResultWarnings
});

export const isSellTaskResult = isFiscalTaskResult;
export const isBuyTaskResult = isFiscalTaskResult;
export const isSellReturnTaskResult = isFiscalTaskResult;
export const isBuyReturnTaskResult = isFiscalTaskResult;
