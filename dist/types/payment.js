import isString from '../common/types/is-string.js';
import { isDocumentPrintItem } from './document-item.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import { makeOpt } from '../common/types/is-opt.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
export var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["cash"] = 0] = "cash";
    PaymentType[PaymentType["electronically"] = 1] = "electronically";
    PaymentType[PaymentType["prepaid"] = 2] = "prepaid";
    PaymentType[PaymentType["credit"] = 3] = "credit";
    PaymentType[PaymentType["other"] = 4] = "other";
    PaymentType[PaymentType["user1"] = 5] = "user1";
    PaymentType[PaymentType["user2"] = 6] = "user2";
    PaymentType[PaymentType["user3"] = 7] = "user3";
    PaymentType[PaymentType["user4"] = 8] = "user4";
    PaymentType[PaymentType["user5"] = 9] = "user5";
})(PaymentType || (PaymentType = {}));
export function isPaymentType(v) {
    return isString(v) && Object.values(PaymentType).includes(v);
}
export const isPayment = structureValidator({
    type: isPaymentType,
    sum: isNumber,
    printItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
});
