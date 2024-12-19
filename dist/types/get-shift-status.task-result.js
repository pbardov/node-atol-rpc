import { isShiftStatusInfo } from './shift-status.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetShiftStatusTaskResult = structureValidator({
    shiftStatus: isShiftStatusInfo,
});
