import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import { makeOpt } from '../common/types/is-opt.js';

// Define the Payments type
export type Payments = {
  cash?: number;
  electronically?: number;
  credit?: number;
  prepaid?: number;
  other?: number;
  [key: `userPaymentType-${string}`]: number | undefined; // Pattern for custom user payment types
};

// Validator for Payments type
export const isPayments = structureValidator<Payments>({
  cash: makeOpt(isNumber),
  electronically: makeOpt(isNumber),
  credit: makeOpt(isNumber),
  prepaid: makeOpt(isNumber),
  other: makeOpt(isNumber),
  // Custom user payment type pattern cannot be directly validated here
});

// Define the OverallReceiptTotals type
export type OverallReceiptTotals = {
  sum: number;
  payments: Payments;
};

// Validator for OverallReceiptTotals type
export const isOverallReceiptTotals = structureValidator<OverallReceiptTotals>({
  sum: isNumber,
  payments: isPayments,
});

// Define Receipts type
export type Receipts = {
  sell: OverallReceiptTotals;
  sellReturn: OverallReceiptTotals;
  buy: OverallReceiptTotals;
  buyReturn: OverallReceiptTotals;
};

// Validator for Receipts type
export const isReceipts = structureValidator<Receipts>({
  sell: isOverallReceiptTotals,
  sellReturn: isOverallReceiptTotals,
  buy: isOverallReceiptTotals,
  buyReturn: isOverallReceiptTotals,
});

// Define the FnTotals type
export type FnTotals = {
  receipts: Receipts;
};

// Validator for FnTotals type
export const isFnTotals = structureValidator<FnTotals>({
  receipts: isReceipts,
});
