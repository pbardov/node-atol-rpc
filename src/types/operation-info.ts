import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';

export type OperationInfo = {
	id: number;
	dateTime: string;
	data: string;
};

export const isOperationInfo = structureValidator<OperationInfo>({
	id: isNumber,
	dateTime: isString,
	data: isString,
});
