import { isShiftState } from './shift-state.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isBoolean from '../common/types/is-boolean.js';
export const isDeviceStatus = structureValidator({
    currentDateTime: isString,
    shift: isShiftState,
    blocked: isBoolean,
    coverOpened: isBoolean,
    paperPresent: isBoolean,
    fiscal: isBoolean,
    fnFiscal: isBoolean,
    fnPresent: isBoolean,
    cashDrawerOpened: isBoolean,
});
