export type McuInfo = {
    partId: string;
    partName: string;
    sn: string;
};
export declare const isMcuInfo: import("../common/types/type-guard.js").TypeGuardDetail<McuInfo>;
export type DataFlashInfo = {
    jedecId: number;
    name: string;
    size: number;
};
export declare const isDataFlashInfo: import("../common/types/type-guard.js").TypeGuardDetail<DataFlashInfo>;
export type EepromInfo = {
    name: string;
    size: number;
};
export declare const isEepromInfo: import("../common/types/type-guard.js").TypeGuardDetail<EepromInfo>;
//# sourceMappingURL=mcu-info.d.ts.map