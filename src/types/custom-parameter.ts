import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';

export type CustomParameter = {
	id: number;
	value: string;
};

export const isCustomParameter = structureValidator<CustomParameter>({
	id: isNumber,
	value: isString,
});
