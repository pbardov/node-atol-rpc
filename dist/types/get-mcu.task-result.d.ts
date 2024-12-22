import { type DataFlashInfo, type EepromInfo, type McuInfo } from './mcu-info.js';
export type GetMcuTaskResult = {
    mcu: McuInfo;
    dataFlash: DataFlashInfo;
    framEeprom: EepromInfo;
};
export declare const isGetMcuTaskResult: import("../common/types/type-guard.js").TypeGuardDetail<GetMcuTaskResult>;
//# sourceMappingURL=get-mcu.task-result.d.ts.map