import { type Sum } from './count-sum.js';
import { type ReceiptPayments } from './shift-totals.js';
export type ReceiptTotal = Sum & ReceiptPayments;
export declare const isReceiptTotal: import("../common/types/type-guard.js").TypeGuardDetail<Sum & ReceiptPayments>;
export type OverallTotalsReceipts = {
    sell: ReceiptTotal;
    sellReturn: ReceiptTotal;
    buy: ReceiptTotal;
    buyReturn: ReceiptTotal;
};
export declare const isOverallTotalsReceipts: import("../common/types/type-guard.js").TypeGuardDetail<OverallTotalsReceipts>;
export type OverallTotals = {
    receipts: OverallTotalsReceipts;
};
export declare const isOverallTotals: import("../common/types/type-guard.js").TypeGuardDetail<OverallTotals>;
//# sourceMappingURL=overall-totals.d.ts.map