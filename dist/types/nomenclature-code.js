import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import { errorDescription } from '../common/types/type-guard.js';
import getTypeGuardDetails from '../common/types/get-type-guard-details.js';
export var NomenclatureCodeType;
(function (NomenclatureCodeType) {
    NomenclatureCodeType["furs"] = "furs";
    NomenclatureCodeType["medicines"] = "medicines";
    NomenclatureCodeType["tobacco"] = "tobacco";
    NomenclatureCodeType["shoes"] = "shoes";
})(NomenclatureCodeType || (NomenclatureCodeType = {}));
export function isNomenclatureCodeType(v) {
    return Object.values(NomenclatureCodeType).includes(v);
}
export const isNomenclatureCodeFurs = structureValidator({
    type: (v) => v === NomenclatureCodeType.furs,
    gtin: (v) => typeof v === 'undefined',
    serial: isString,
});
export const isNomenclatureCodeGeneric = structureValidator({
    type: (v) => v !== NomenclatureCodeType.furs && isNomenclatureCodeType(v),
    gtin: isString,
    serial: isString,
});
const nomenclatureCodeTypeGuardMap = {
    [NomenclatureCodeType.furs]: isNomenclatureCodeFurs,
    [NomenclatureCodeType.shoes]: isNomenclatureCodeGeneric,
    [NomenclatureCodeType.medicines]: isNomenclatureCodeGeneric,
    [NomenclatureCodeType.tobacco]: isNomenclatureCodeGeneric,
};
export function isNomenclatureCode(v, error = {}) {
    const mb = v;
    if (!mb || typeof mb !== 'object') {
        error[errorDescription] = 'Value must be of object type';
        return false;
    }
    if (!isNomenclatureCodeType(mb.type)) {
        error.type = getTypeGuardDetails(isNomenclatureCodeType);
        return false;
    }
    return nomenclatureCodeTypeGuardMap[mb.type](v, error);
}
