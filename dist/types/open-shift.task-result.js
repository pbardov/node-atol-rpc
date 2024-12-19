import { isIsoDateString } from '../common/types/iso-date-string.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';
export const isOpenShiftTaskResult = structureValidator({
    fiscalDocumentNumber: isNumber,
    fiscalDocumentSign: isString,
    fiscalDocumentDateTime: isIsoDateString,
    shiftNumber: isNumber,
    fnNumber: isString,
    registrationNumber: isString,
    fnsUrl: isString,
    notPrinted: makeOpt(isBoolean),
});
