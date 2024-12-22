export type FnInfoWarnings = {
    memoryOverflow: boolean;
    needReplacement: boolean;
    ofdTimeout: boolean;
    resourceExhausted: boolean;
    criticalError: boolean;
};
export declare const isFnInfoWarnings: import("../common/types/type-guard.js").TypeGuardDetail<FnInfoWarnings>;
export type FnInfo = {
    serial: string;
    version: string;
    execution: string;
    numberOfRegistrations: number;
    registrationsRemaining: number;
    validityDate: string;
    ffdVersion: string;
    fnContainsKeysUpdaterServerUri: boolean;
    fnFfdVersion: string;
    livePhase: string;
    warnings: FnInfoWarnings;
};
export declare const isFnInfo: import("../common/types/type-guard.js").TypeGuardDetail<FnInfo>;
//# sourceMappingURL=fn-info.d.ts.map