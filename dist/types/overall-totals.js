import { isSum } from './count-sum.js';
import { isReceiptPayments } from './shift-totals.js';
import combineTypeGuards from '../common/types/combine-type-guards.js';
import structureValidator from '../common/types/structure-validator.js';
export const isReceiptTotal = combineTypeGuards(isSum, isReceiptPayments);
export const isOverallTotalsReceipts = structureValidator({
    sell: isReceiptTotal,
    sellReturn: isReceiptTotal,
    buy: isReceiptTotal,
    buyReturn: isReceiptTotal,
});
export const isOverallTotals = structureValidator({
    receipts: isOverallTotalsReceipts,
});
