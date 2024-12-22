export type OfdExchangeStatus = {
    notSentCount: number;
    notSentFirstDocNumber: number;
    notSentFirstDocDateTime: string;
    lastSuccessKeysUpdate: string;
};
export declare const isOfdExchangeStatus: import("../common/types/type-guard.js").TypeGuardDetail<OfdExchangeStatus>;
export type CodeDescription = {
    code: number;
    description: string;
};
export declare const isCodeDescription: import("../common/types/type-guard.js").TypeGuardDetail<CodeDescription>;
export type OfdExchangeErrors = {
    network: CodeDescription;
    ofd: CodeDescription;
    fn: CodeDescription;
    documentNumber: number;
    fnCommandCode: number;
    lastSuccessConnectionDateTime: string;
};
export declare const isOfdExchangeErrors: import("../common/types/type-guard.js").TypeGuardDetail<OfdExchangeErrors>;
export type OfdExchangeWarnings = {
    dataForSendIsEmpty: boolean;
};
export declare const isOfdExchangeWarnings: import("../common/types/type-guard.js").TypeGuardDetail<OfdExchangeWarnings>;
//# sourceMappingURL=ofd-exchange.d.ts.map