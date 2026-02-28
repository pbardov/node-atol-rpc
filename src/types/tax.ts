import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export enum TaxType {
	none = 'none',
	vat0 = 'vat0',
	vat10 = 'vat10',
	vat110 = 'vat110',
	vat20 = 'vat20',
	vat120 = 'vat120',
	vat5 = 'vat5',
	vat105 = 'vat105',
	vat7 = 'vat7',
	vat107 = 'vat107',
	vat22 = 'vat22',
	vat122 = 'vat122',
}

export function isTaxType(v: unknown): v is TaxType {
	return Object.values(TaxType).includes(v as TaxType);
}

export type Tax = {
	/** Налоговая ставка (тег 1199) */
	type: TaxType;
	/**
	 * Сумма налога.
	 * Обязательна для налогов на чек; для позиций необязательна (по умолчанию рассчитывается автоматически).
	 */
	sum?: number;
};

export const isTax = structureValidator<Tax>({
	type: isTaxType,
	sum: (v: unknown): v is number | undefined => v === undefined || isNumber(v),
});
