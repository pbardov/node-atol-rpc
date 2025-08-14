import {type FiscalTaskResult, isFiscalTaskResult} from './fiscal.task-result.js';

export type CorrectionTaskResult = FiscalTaskResult;
export type SellCorrectionTaskResult = CorrectionTaskResult;
export type SellReturnCorrectionTaskResult = CorrectionTaskResult;
export type BuyCorrectionTaskResult = CorrectionTaskResult;
export type BuyReturnCorrectionTaskResult = CorrectionTaskResult;

export const isCorrectionTaskResult = isFiscalTaskResult;
export const isSellCorrectionTaskResult = isCorrectionTaskResult;
export const isSellReturnCorrectionTaskResult = isCorrectionTaskResult;
export const isBuyCorrectionTaskResult = isCorrectionTaskResult;
export const isBuyReturnCorrectionTaskResult = isCorrectionTaskResult;
