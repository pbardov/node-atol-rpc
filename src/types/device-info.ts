import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';

export type DeviceInfo = {
	model: number;
	modelName: string;
	serial: string;
	firmwareVersion: string;
	configurationVersion: string;
	receiptLineLength: number;
	receiptLineLengthPix: number;
	ffdVersion: string;
	fnFfdVersion: string;
};

export const isDeviceInfo = structureValidator<DeviceInfo>({
	model: isNumber,
	modelName: isString,
	serial: isString,
	firmwareVersion: isString,
	configurationVersion: isString,
	receiptLineLength: isNumber,
	receiptLineLengthPix: isNumber,
	ffdVersion: isString,
	fnFfdVersion: isString,
});
