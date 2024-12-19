import { isIsoDateString } from '../common/types/iso-date-string.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
import structureValidator from '../common/types/structure-validator.js';
import { isResultWarnings } from './result-warnings.js';
export const isShiftTaskResult = structureValidator({
    fiscalDocumentNumber: isNumber,
    fiscalDocumentSign: isString,
    fiscalDocumentDateTime: isIsoDateString,
    shiftNumber: isNumber,
    fnNumber: isString,
    registrationNumber: isString,
    fnsUrl: isString,
    warnings: makeOpt(isResultWarnings),
});
export const isOpenShiftTaskResult = isShiftTaskResult;
export const isCloseShiftTaskResult = isShiftTaskResult;
