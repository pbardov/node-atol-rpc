import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {
	type CountSum, isCountSum, isSum, type Sum,
} from './count-sum.js';
import {makeOpt} from '../common/types/is-opt.js';
import {TypeGuardDetail} from '../common/types/type-guard.js';
import combineTypeGuards from '../common/types/combine-type-guards.js';

export type ShiftTotalsPayments = {
	cash: number;
	electronically: number;
	credit: number;
	prepaid: number;
	other: number;
	['userPaymentType-1']?: number;
	['userPaymentType-2']?: number;
	['userPaymentType-3']?: number;
	['userPaymentType-4']?: number;
	['userPaymentType-5']?: number;
};

export const isShiftTotalsPayments = structureValidator<ShiftTotalsPayments>({
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

export type ReceiptPayments = {
	payments?: ShiftTotalsPayments;
};

export const isReceiptPayments = structureValidator<ReceiptPayments>({
	payments: makeOpt(isShiftTotalsPayments),
});

export type ReceiptTotal = CountSum & ReceiptPayments;

export const isReceiptTotal = combineTypeGuards(isCountSum, isReceiptPayments);

export type ShiftTotalsReceipts = {
	sell: ReceiptTotal;
	sellReturn: ReceiptTotal;
	buy: ReceiptTotal;
	buyReturn: ReceiptTotal;
};

export const isShiftTotalsReceipts = structureValidator<ShiftTotalsReceipts>({
	sell: isReceiptTotal,
	sellReturn: isReceiptTotal,
	buy: isReceiptTotal,
	buyReturn: isReceiptTotal,
});

export type ShiftTotals = {
	shiftNumber: number;
	cashDrawer: Sum;
	income: CountSum;
	outcome: CountSum;
	receipts: ShiftTotalsReceipts;
};

export const isShiftTotals = structureValidator<ShiftTotals>({
	shiftNumber: isNumber,
	cashDrawer: isSum,
	income: isCountSum,
	outcome: isCountSum,
	receipts: isShiftTotalsReceipts,
});
