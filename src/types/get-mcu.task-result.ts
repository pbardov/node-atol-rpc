import {
	type DataFlashInfo,
	type EepromInfo,
	isDataFlashInfo,
	isEepromInfo,
	isMcuInfo,
	type McuInfo,
} from './mcu-info.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetMcuTaskResult = {
	mcu: McuInfo;
	dataFlash: DataFlashInfo;
	framEeprom: EepromInfo;
};

export const isGetMcuTaskResult = structureValidator<GetMcuTaskResult>({
	mcu: isMcuInfo,
	dataFlash: isDataFlashInfo,
	framEeprom: isEepromInfo,
});
