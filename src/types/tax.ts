import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export enum TaxType {
	none = 'none',
	vat0 = 'vat0',
	vat10 = 'vat10',
	vat110 = 'vat110',
	vat20 = 'vat20',
	vat120 = 'vat120',
}

export function isTaxType(v: unknown): v is TaxType {
	return Object.values(TaxType).includes(v as TaxType);
}

export type Tax = {
	type: TaxType;
	sum: number;
};

export const isTax = structureValidator<Tax>({
	type: isTaxType,
	sum: isNumber,
});
