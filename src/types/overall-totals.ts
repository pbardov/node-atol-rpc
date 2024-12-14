import {isSum, type Sum} from './count-sum.js';
import {isReceiptPayments, type ReceiptPayments} from './shift-totals.js';
import combineTypeGuards from '../common/types/combine-type-guards.js';
import structureValidator from '../common/types/structure-validator.js';

export type ReceiptTotal = Sum & ReceiptPayments;

export const isReceiptTotal = combineTypeGuards(isSum, isReceiptPayments);

export type OverallTotalsReceipts = {
	sell: ReceiptTotal;
	sellReturn: ReceiptTotal;
	buy: ReceiptTotal;
	buyReturn: ReceiptTotal;
};

export const isOverallTotalsReceipts = structureValidator<OverallTotalsReceipts>({
	sell: isReceiptTotal,
	sellReturn: isReceiptTotal,
	buy: isReceiptTotal,
	buyReturn: isReceiptTotal,
});

export type OverallTotals = {
	receipts: OverallTotalsReceipts;
};

export const isOverallTotals = structureValidator<OverallTotals>({
	receipts: isOverallTotalsReceipts,
});
