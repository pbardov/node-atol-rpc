import { isShiftTotals } from './shift-totals.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetShiftTotalsTaskResult = structureValidator({
    shiftTotals: isShiftTotals,
});
