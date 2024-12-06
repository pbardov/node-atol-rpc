import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';
import type {ValidationErrors} from '../common/types/type-guard.js';

export type ProductCodesWithoutTypes = {
	codes: string[];
};

export type ProductCodesWithTypes = {
	undefined?: string;
	ean8?: string;
	ean13?: string;
	itf14?: string;
	gs10?: string;
	gs1m?: string;
	short?: string;
	furs?: string;
	egais20?: string;
	egais30?: string;
	f1?: string;
	f2?: string;
	f3?: string;
	f4?: string;
	f5?: string;
	f6?: string;
};

export type ProductCodes = ProductCodesWithTypes | ProductCodesWithoutTypes;

export const isProductCodesWithoutTypes = structureValidator<ProductCodesWithoutTypes>({
	codes: arrayTypeGuard(isString),
});
export const isProductCodesWithTypes = structureValidator<ProductCodesWithTypes>({
	undefined: makeOpt(isString),
	ean8: makeOpt(isString),
	ean13: makeOpt(isString),
	itf14: makeOpt(isString),
	gs10: makeOpt(isString),
	gs1m: makeOpt(isString),
	short: makeOpt(isString),
	furs: makeOpt(isString),
	egais20: makeOpt(isString),
	egais30: makeOpt(isString),
	f1: makeOpt(isString),
	f2: makeOpt(isString),
	f3: makeOpt(isString),
	f4: makeOpt(isString),
	f5: makeOpt(isString),
	f6: makeOpt(isString),
});

export function isProductCodes(v: unknown, errors: ValidationErrors = {}): v is ProductCodes {
	return isProductCodesWithoutTypes(v, errors) || isProductCodesWithTypes(v, errors);
}
