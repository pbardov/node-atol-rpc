import {isResultWarnings, type ResultWarnings} from './result-warnings.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';

export type FiscalTaskResult = {
	total: number;
	fiscalDocumentNumber: number;
	fiscalDocumentSign: string;
	fiscalDocumentDateTime: string;
	fiscalReceiptNumber: number;
	shiftNumber: number;
	fnNumber: string;
	registrationNumber: string;
	fnsUrl: string;
	warnings?: ResultWarnings;
};

export type SellTaskResult = FiscalTaskResult;
export type BuyTaskResult = FiscalTaskResult;
export type SellReturnTaskResult = FiscalTaskResult;
export type BuyReturnTaskResult = FiscalTaskResult;

export const isFiscalTaskResult = structureValidator<FiscalTaskResult>({
	total: isNumber,
	fiscalDocumentNumber: isNumber,
	fiscalDocumentSign: isString,
	fiscalDocumentDateTime: isString,
	fiscalReceiptNumber: isNumber,
	shiftNumber: isNumber,
	fnNumber: isString,
	registrationNumber: isString,
	fnsUrl: isString,
	warnings: makeOpt(isResultWarnings),
});

export const isSellTaskResult = isFiscalTaskResult;
export const isBuyTaskResult = isFiscalTaskResult;
export const isSellReturnTaskResult = isFiscalTaskResult;
export const isBuyReturnTaskResult = isFiscalTaskResult;
