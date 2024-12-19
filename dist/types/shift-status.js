import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import { makeOpt } from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';
export var ShiftStatus;
(function (ShiftStatus) {
    ShiftStatus["closed"] = "closed";
    ShiftStatus["opened"] = "opened";
    ShiftStatus["expired"] = "expired";
})(ShiftStatus || (ShiftStatus = {}));
export function isShiftStatus(v) {
    return Object.values(ShiftStatus).includes(v);
}
export const isShiftStatusInfo = structureValidator({
    documentsCount: isNumber,
    expiredTime: makeOpt(isString),
    number: isNumber,
    status: isShiftStatus,
});
