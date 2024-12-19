import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import isBoolean from '../common/types/is-boolean.js';
export const isOfdExchangeStatus = structureValidator({
    notSentCount: isNumber,
    notSentFirstDocNumber: isNumber,
    notSentFirstDocDateTime: isString,
    lastSuccessKeysUpdate: isString,
});
export const isCodeDescription = structureValidator({
    code: isNumber,
    description: isString,
});
export const isOfdExchangeErrors = structureValidator({
    network: isCodeDescription,
    ofd: isCodeDescription,
    fn: isCodeDescription,
    documentNumber: isNumber,
    fnCommandCode: isNumber,
    lastSuccessConnectionDateTime: isString,
});
export const isOfdExchangeWarnings = structureValidator({
    dataForSendIsEmpty: isBoolean,
});
