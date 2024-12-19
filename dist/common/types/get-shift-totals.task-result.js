import { isShiftTotals } from '../../types/shift-totals.js';
import structureValidator from './structure-validator.js';
export const isGetShiftTotalsTaskResult = structureValidator({
    shiftTotals: isShiftTotals,
});
