import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
export const isDeviceInfo = structureValidator({
    model: isNumber,
    modelName: isString,
    serial: isString,
    firmwareVersion: isString,
    configurationVersion: isString,
    receiptLineLength: isNumber,
    receiptLineLengthPix: isNumber,
    ffdVersion: isString,
    fnFfdVersion: isString,
});
