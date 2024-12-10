import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';

export type McuInfo = {
	partId: string;
	partName: string;
	sn: string;
};

export const isMcuInfo = structureValidator<McuInfo>({
	partId: isString,
	partName: isString,
	sn: isString,
});

export type DataFlashInfo = {
	jedecId: number;
	name: string;
	size: number;
};

export const isDataFlashInfo = structureValidator<DataFlashInfo>({
	jedecId: isNumber,
	name: isString,
	size: isNumber,
});

export type EepromInfo = {
	name: string;
	size: number;
};

export const isEepromInfo = structureValidator<EepromInfo>({
	name: isString,
	size: isNumber,
});
