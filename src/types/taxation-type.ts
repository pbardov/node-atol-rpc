export enum TaxationType {
	osn = 'osn',
	usnIncome = 'usnIncome',
	usnIncomeOutcome = 'usnIncomeOutcome',
	esn = 'esn',
	patent = 'patent',
}

export function isTaxationType(v: unknown): v is TaxationType {
	return Object.values(TaxationType).includes(v as TaxationType);
}
