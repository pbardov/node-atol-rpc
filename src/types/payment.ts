import isString from '../common/types/is-string.js';
import {type DocumentPrintItem, isDocumentPrintItem} from './document-item.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export enum PaymentType {
	cash = 0,
	electronically,
	prepaid,
	credit,
	other,
	user1,
	user2,
	user3,
	user4,
	user5,
}

export function isPaymentType(v: unknown): v is PaymentType {
	return isString(v) && Object.values(PaymentType).includes(v);
}

export type Payment = {
	type: PaymentType;
	sum: number;
	printItems?: DocumentPrintItem[];
};

export const isPayment = structureValidator<Payment>({
	type: isPaymentType,
	sum: isNumber,
	printItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
});

