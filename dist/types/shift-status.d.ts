export declare enum ShiftStatus {
    closed = "closed",
    opened = "opened",
    expired = "expired"
}
export declare function isShiftStatus(v: unknown): v is ShiftStatus;
export type ShiftStatusInfo = {
    documentsCount: number;
    expiredTime?: string;
    number: number;
    status: ShiftStatus;
};
export declare const isShiftStatusInfo: import("../common/types/type-guard.js").TypeGuardDetail<ShiftStatusInfo>;
//# sourceMappingURL=shift-status.d.ts.map