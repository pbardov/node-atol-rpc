import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export type CorrectionsCount = {
  corrections: number;
  count: number;
};

export const isCorrectionsCount = structureValidator<CorrectionsCount>({
  corrections: isNumber,
  count: isNumber,
});

export type FnQuantityCounters = {
  shiftNumber: number;
  countAll: number;
  sell: CorrectionsCount;
  sellReturn: CorrectionsCount;
  buy: CorrectionsCount;
  buyReturn: CorrectionsCount;
};

// Validator for FnQuantityReceipts type
export const isFnQuantityCounters = structureValidator<FnQuantityCounters>({
  shiftNumber: isNumber,
  countAll: isNumber,
  sell: isCorrectionsCount,
  sellReturn: isCorrectionsCount,
  buy: isCorrectionsCount,
  buyReturn: isCorrectionsCount
});
