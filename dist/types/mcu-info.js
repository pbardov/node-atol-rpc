import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';
export const isMcuInfo = structureValidator({
    partId: isString,
    partName: isString,
    sn: isString,
});
export const isDataFlashInfo = structureValidator({
    jedecId: isNumber,
    name: isString,
    size: isNumber,
});
export const isEepromInfo = structureValidator({
    name: isString,
    size: isNumber,
});
