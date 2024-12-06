export enum PaymentMethod {
	fullPrepayment = 'fullPrepayment',
	prepayment = 'prepayment',
	advance = 'advance',
	fullPayment = 'fullPayment',
	partialPayment = 'partialPayment',
	credit = 'credit',
	creditPayment = 'creditPayment',
}

export function isPaymentMethod(v: unknown): v is PaymentMethod {
	return Object.values(PaymentMethod).includes(v as PaymentMethod);
}
