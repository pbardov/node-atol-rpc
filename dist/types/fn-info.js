import structureValidator from '../common/types/structure-validator.js';
import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';
export const isFnInfoWarnings = structureValidator({
    memoryOverflow: isBoolean,
    needReplacement: isBoolean,
    ofdTimeout: isBoolean,
    resourceExhausted: isBoolean,
    criticalError: isBoolean,
});
export const isFnInfo = structureValidator({
    serial: isString,
    version: isString,
    execution: isString,
    numberOfRegistrations: isNumber,
    registrationsRemaining: isNumber,
    validityDate: isString,
    ffdVersion: isString,
    fnContainsKeysUpdaterServerUri: isBoolean,
    fnFfdVersion: isString,
    livePhase: isString,
    warnings: isFnInfoWarnings,
});
