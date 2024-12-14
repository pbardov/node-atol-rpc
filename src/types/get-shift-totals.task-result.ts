import {isShiftTotals, type ShiftTotals} from './shift-totals.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetShiftTotalsTaskResult = {
	shiftTotals: ShiftTotals;
};

export const isGetShiftTotalsTaskResult = structureValidator<GetShiftTotalsTaskResult>({
	shiftTotals: isShiftTotals,
});
