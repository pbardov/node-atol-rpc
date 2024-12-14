import {isOverallTotals, type OverallTotals} from './overall-totals.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetOverallTotalsTaskResult = {
	overallTotals: OverallTotals;
};

export const isGetOverallTotalsTaskResult = structureValidator<GetOverallTotalsTaskResult>({
	overallTotals: isOverallTotals,
});
