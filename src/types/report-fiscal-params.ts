import {type FiscalParams, fiscalParamsValidator} from './fiscal-params.js';
import {type FnQuantityCounters, isFnQuantityCounters} from './fn-quantity-counters.js';
import {type FnTotals, isFnTotals} from './fn-totals.js';
import {type FnUnsentCounter, isFnUnsentCounter} from './fn-unsent-counter.js';
import structureValidator from '../common/types/structure-validator.js';

export type ReportFiscalParams = FiscalParams & {
    fnQuantityCounters: FnQuantityCounters;
    fnTotals: FnTotals;
    fnUnsentDocsCounters: FnUnsentCounter;
}

export const isReportFiscalParams = structureValidator<ReportFiscalParams>({
    ...fiscalParamsValidator,
    fnQuantityCounters: isFnQuantityCounters,
    fnTotals: isFnTotals,
    fnUnsentDocsCounters: isFnUnsentCounter,
});
