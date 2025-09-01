import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import isBoolean from '../common/types/is-boolean.js';
import {type CodeDescription, isCodeDescription} from './code-description.js';

export type OfdExchangeStatus = {
	notSentCount: number;
	notSentFirstDocNumber: number;
	notSentFirstDocDateTime: string;
	lastSuccessKeysUpdate: string;
};

export const isOfdExchangeStatus = structureValidator<OfdExchangeStatus>({
	notSentCount: isNumber,
	notSentFirstDocNumber: isNumber,
	notSentFirstDocDateTime: isString,
	lastSuccessKeysUpdate: isString,
});

export type OfdExchangeErrors = {
	network: CodeDescription;
	ofd: CodeDescription;
	fn: CodeDescription;
	documentNumber: number;
	fnCommandCode: number;
	lastSuccessConnectionDateTime: string;
};

export const isOfdExchangeErrors = structureValidator<OfdExchangeErrors>({
	network: isCodeDescription,
	ofd: isCodeDescription,
	fn: isCodeDescription,
	documentNumber: isNumber,
	fnCommandCode: isNumber,
	lastSuccessConnectionDateTime: isString,
});

export type OfdExchangeWarnings = {
	dataForSendIsEmpty: boolean;
};

export const isOfdExchangeWarnings = structureValidator<OfdExchangeWarnings>({
	dataForSendIsEmpty: isBoolean,
});
