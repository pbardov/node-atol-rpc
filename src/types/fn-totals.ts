import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export type FnTotalCounter = {
  receipts: number;
  corrections: number;
  receiptsSum: number;
  correctionsSum: number;
  cashSum: number;
  noncashSum: number;
  prepaidSum: number;
  creditSum: number;
  barterSum: number;
  vat20Sum: number;
  vat10Sum: number;
  vat120Sum: number;
  vat110Sum: number;
  vat0Sum: number;
  vatNoSum: number;
};

export const isFnTotalCounter = structureValidator<FnTotalCounter>({
  receipts: isNumber,
  corrections: isNumber,
  receiptsSum: isNumber,
  correctionsSum: isNumber,
  cashSum: isNumber,
  noncashSum: isNumber,
  prepaidSum: isNumber,
  creditSum: isNumber,
  barterSum: isNumber,
  vat20Sum: isNumber,
  vat10Sum: isNumber,
  vat120Sum: isNumber,
  vat110Sum: isNumber,
  vat0Sum: isNumber,
  vatNoSum: isNumber,
});

export type FnTotals = {
  sell: FnTotalCounter;
  buy: FnTotalCounter;
  sellReturn: FnTotalCounter;
  buyReturn: FnTotalCounter;
};


export const isFnTotals = structureValidator<FnTotals>({
  sell: isFnTotalCounter,
  buy: isFnTotalCounter,
  sellReturn: isFnTotalCounter,
  buyReturn: isFnTotalCounter,
});
