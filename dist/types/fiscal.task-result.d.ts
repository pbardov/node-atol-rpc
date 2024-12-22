import { type ResultWarnings } from './result-warnings.js';
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
export declare const isFiscalTaskResult: import("../common/types/type-guard.js").TypeGuardDetail<FiscalTaskResult>;
export declare const isSellTaskResult: import("../common/types/type-guard.js").TypeGuardDetail<FiscalTaskResult>;
export declare const isBuyTaskResult: import("../common/types/type-guard.js").TypeGuardDetail<FiscalTaskResult>;
export declare const isSellReturnTaskResult: import("../common/types/type-guard.js").TypeGuardDetail<FiscalTaskResult>;
export declare const isBuyReturnTaskResult: import("../common/types/type-guard.js").TypeGuardDetail<FiscalTaskResult>;
//# sourceMappingURL=fiscal.task-result.d.ts.map