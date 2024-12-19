import { isOverallTotals } from './overall-totals.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetOverallTotalsTaskResult = structureValidator({
    overallTotals: isOverallTotals,
});
