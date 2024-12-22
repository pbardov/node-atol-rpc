import { type DocumentPrintItem } from './document-item.js';
export declare enum PaymentType {
    cash = 0,
    electronically = 1,
    prepaid = 2,
    credit = 3,
    other = 4,
    user1 = 5,
    user2 = 6,
    user3 = 7,
    user4 = 8,
    user5 = 9
}
export declare function isPaymentType(v: unknown): v is PaymentType;
export type Payment = {
    type: PaymentType;
    sum: number;
    printItems?: DocumentPrintItem[];
};
export declare const isPayment: import("../common/types/type-guard.js").TypeGuardDetail<Payment>;
//# sourceMappingURL=payment.d.ts.map