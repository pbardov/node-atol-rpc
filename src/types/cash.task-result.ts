import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export type CashCounters = {
    cashSum: number;
}

export const isCashCounters = structureValidator<CashCounters>({
    cashSum: isNumber
});

export type CashTaskResult = {
    counters: CashCounters;
}

export const isCashTaskResult = structureValidator<CashTaskResult>({
    counters: isCashCounters
});
