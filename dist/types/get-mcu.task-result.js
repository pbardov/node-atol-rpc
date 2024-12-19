import { isDataFlashInfo, isEepromInfo, isMcuInfo, } from './mcu-info.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetMcuTaskResult = structureValidator({
    mcu: isMcuInfo,
    dataFlash: isDataFlashInfo,
    framEeprom: isEepromInfo,
});
