import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export type CountSum = {
	count: number;
	sum: number;
};

export const isCountSum = structureValidator<CountSum>({
	count: isNumber,
	sum: isNumber,
});

export type Sum = {
	sum: number;
};

export const isSum = structureValidator<Sum>({sum: isNumber});
