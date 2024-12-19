import structureValidator from '../common/types/structure-validator.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
export const isProductCodesWithoutTypes = structureValidator({
    codes: arrayTypeGuard(isString),
});
export const isProductCodesWithTypes = structureValidator({
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
export function isProductCodes(v, errors = {}) {
    return isProductCodesWithoutTypes(v, errors) || isProductCodesWithTypes(v, errors);
}
