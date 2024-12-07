import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';

export type UserAttribute = {
	name: string;
	value: string;
};

export const isUserAttribute = structureValidator<UserAttribute>({
	name: isString,
	value: isString,
});
