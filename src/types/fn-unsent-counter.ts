import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export type SumCount = {
    sum: number;
    count: number;
};

export const isSumCount = structureValidator<SumCount>({
    sum: isNumber,
    count: isNumber,
});

export type FnUnsentCounter = {
    sell: SumCount,
    buy: SumCount,
    sellReturn: SumCount,
    buyReturn: SumCount,
};

export const isFnUnsentCounter = structureValidator<FnUnsentCounter>({
    sell: isSumCount,
    buy: isSumCount,
    sellReturn: isSumCount,
    buyReturn: isSumCount,
});
