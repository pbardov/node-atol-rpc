import {isPhone12, type Phone12} from '../common/types/phone12.js';
import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export type SupplierInfo = {
	phones: Phone12[];
	name: string;
	vatin: string;
	supplierPrint?: boolean;
	supplierVatinPrint?: boolean;
};

export const isSupplierInfo = structureValidator<SupplierInfo>({
	phones: arrayTypeGuard(isPhone12),
	name: isString,
	vatin: isString,
	supplierPrint: makeOpt(isBoolean),
	supplierVatinPrint: makeOpt(isBoolean),
});
