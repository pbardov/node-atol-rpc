import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
export var MarkingCodeType;
(function (MarkingCodeType) {
    MarkingCodeType["other"] = "other";
    MarkingCodeType["egais20"] = "egais20";
    MarkingCodeType["egais30"] = "egais30";
})(MarkingCodeType || (MarkingCodeType = {}));
export function isMarkingCodeType(v) {
    return Object.values(MarkingCodeType).includes(v);
}
export const isMarkingCode = structureValidator({
    type: isMarkingCodeType,
    mark: isString,
});
