import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
import { isFnTotals, type FnTotals } from './fn-totals.js';
import { isFnQuantityCounters, type FnQuantityCounters } from './fn-quantity-counters.js';

export type FiscalParams = {
  fiscalDocumentNumber: number; // Required: Number identifying the fiscal document
  fiscalDocumentSign: string;   // Required: Signature of the fiscal document
  fiscalDocumentDateTime: string; // Required: Date and time of the fiscal document
  fiscalReceiptNumber: number;  // Required: Number identifying the fiscal receipt
  shiftNumber: number;          // Required: Number identifying the shift
  fnNumber: string;             // Required: Fiscal number
  registrationNumber: string;   // Required: Registration number
  receiptsCount?: number;       // Optional: Count of receipts
  fnsUrl?: string;              // Optional: URL for the fiscal service
  fnTotals?: FnTotals;          // Optional: Total function data
  fnQuantityCounters?: FnQuantityCounters; // Optional: Quantity counter function data
};

export const isFiscalParams = structureValidator<FiscalParams>({
  fiscalDocumentNumber: isNumber,  // Validate as number
  fiscalDocumentSign: isString,    // Validate as string
  fiscalDocumentDateTime: isString, // Validate as string
  fiscalReceiptNumber: isNumber,   // Validate as number
  shiftNumber: isNumber,           // Validate as number
  fnNumber: isString,              // Validate as string
  registrationNumber: isString,    // Validate as string
  receiptsCount: makeOpt(isNumber), // Validate as optional number
  fnsUrl: makeOpt(isString),       // Validate as optional string
  fnTotals: makeOpt(isFnTotals),   // Validate as optional using isFnTotals
  fnQuantityCounters: makeOpt(isFnQuantityCounters) // Validate as optional using isFnQuantityCounters
});
