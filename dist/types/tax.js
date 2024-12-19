import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
export var TaxType;
(function (TaxType) {
    TaxType["none"] = "none";
    TaxType["vat0"] = "vat0";
    TaxType["vat10"] = "vat10";
    TaxType["vat110"] = "vat110";
    TaxType["vat20"] = "vat20";
    TaxType["vat120"] = "vat120";
})(TaxType || (TaxType = {}));
export function isTaxType(v) {
    return Object.values(TaxType).includes(v);
}
export const isTax = structureValidator({
    type: isTaxType,
    sum: isNumber,
});
