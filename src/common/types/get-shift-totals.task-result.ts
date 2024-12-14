import {isShiftTotals, type ShiftTotals} from '../../types/shift-totals.js';
import structureValidator from './structure-validator.js';

export type GetShiftTotalsTaskResult = {
	shiftTotals: ShiftTotals;
};

export const isGetShiftTotalsTaskResult = structureValidator<GetShiftTotalsTaskResult>({
	shiftTotals: isShiftTotals,
});
