import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';

export type CashDrawerCounters = {
	cashSum: number;
};

export const isCashDrawerCounters = structureValidator<CashDrawerCounters>({
	cashSum: isNumber,
});

export type CashDrawerStatus = {
	cashDrawerOpened: boolean;
};

export const isCashDrawerStatus = structureValidator<CashDrawerStatus>({
	cashDrawerOpened: isBoolean,
});
