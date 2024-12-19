import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import isRecordOf from '../common/types/is-record-of.js';
export const isShiftResults = structureValidator({
    buy: isNumber,
    buyReturn: isNumber,
    sell: isNumber,
    sellReturn: isNumber,
});
export const isDepartmentSum = isRecordOf(isString, isShiftResults);
