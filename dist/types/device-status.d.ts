import { type ShiftState } from './shift-state.js';
export type DeviceStatus = {
    currentDateTime: string;
    shift: ShiftState;
    blocked: boolean;
    coverOpened: boolean;
    paperPresent: boolean;
    fiscal: boolean;
    fnFiscal: boolean;
    fnPresent: boolean;
    cashDrawerOpened: boolean;
};
export declare const isDeviceStatus: import("../common/types/type-guard.js").TypeGuardDetail<DeviceStatus>;
//# sourceMappingURL=device-status.d.ts.map