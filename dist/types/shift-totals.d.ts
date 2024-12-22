import { type CountSum, type Sum } from './count-sum.js';
import { TypeGuardDetail } from '../common/types/type-guard.js';
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
export declare const isShiftTotalsPayments: TypeGuardDetail<ShiftTotalsPayments>;
export type ReceiptPayments = {
    payments: ShiftTotalsPayments;
};
export declare const isReceiptPayments: TypeGuardDetail<ReceiptPayments>;
export type ReceiptTotal = CountSum & ReceiptPayments;
export declare const isReceiptTotal: TypeGuardDetail<CountSum & ReceiptPayments>;
export type ShiftTotalsReceipts = {
    sell: ReceiptTotal;
    sellReturn: ReceiptTotal;
    buy: ReceiptTotal;
    buyReturn: ReceiptTotal;
};
export declare const isShiftTotalsReceipts: TypeGuardDetail<ShiftTotalsReceipts>;
export type ShiftTotals = {
    shiftNumber: number;
    cashDrawer: Sum;
    income: CountSum;
    outcome: CountSum;
    receipts: ShiftTotalsReceipts;
};
export declare const isShiftTotals: TypeGuardDetail<ShiftTotals>;
//# sourceMappingURL=shift-totals.d.ts.map