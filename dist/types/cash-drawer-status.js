import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';
export const isCashDrawerCounters = structureValidator({
    cashSum: isNumber,
});
export const isCashDrawerStatus = structureValidator({
    cashDrawerOpened: isBoolean,
});
