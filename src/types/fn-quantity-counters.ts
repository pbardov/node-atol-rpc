import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

// Define Receipts type within FN Quantity Counters
export type FnQuantityReceipts = {
  sell: number;
  sellReturn: number;
  buy: number;
  buyReturn: number;
};

// Validator for FnQuantityReceipts type
export const isFnQuantityReceipts = structureValidator<FnQuantityReceipts>({
  sell: isNumber,
  sellReturn: isNumber,
  buy: isNumber,
  buyReturn: isNumber,
});

// Define the main FN Quantity Counters type
export type FnQuantityCounters = {
  receipts: FnQuantityReceipts;
};

// Validator for the FnQuantityCounters type
export const isFnQuantityCounters = structureValidator<FnQuantityCounters>({
  receipts: isFnQuantityReceipts,
});
