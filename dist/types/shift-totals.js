import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import { isCountSum, isSum, } from './count-sum.js';
import { makeOpt } from '../common/types/is-opt.js';
import combineTypeGuards from '../common/types/combine-type-guards.js';
export const isShiftTotalsPayments = structureValidator({
    cash: isNumber,
    electronically: isNumber,
    credit: isNumber,
    prepaid: isNumber,
    other: isNumber,
    'userPaymentType-1': makeOpt(isNumber),
    'userPaymentType-2': makeOpt(isNumber),
    'userPaymentType-3': makeOpt(isNumber),
    'userPaymentType-4': makeOpt(isNumber),
    'userPaymentType-5': makeOpt(isNumber),
});
export const isReceiptPayments = structureValidator({
    payments: isShiftTotalsPayments,
});
export const isReceiptTotal = combineTypeGuards(isCountSum, isReceiptPayments);
export const isShiftTotalsReceipts = structureValidator({
    sell: isReceiptTotal,
    sellReturn: isReceiptTotal,
    buy: isReceiptTotal,
    buyReturn: isReceiptTotal,
});
export const isShiftTotals = structureValidator({
    shiftNumber: isNumber,
    cashDrawer: isSum,
    income: isCountSum,
    outcome: isCountSum,
    receipts: isShiftTotalsReceipts,
});
