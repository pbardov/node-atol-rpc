import {
	type CashDrawerCounters, type CashDrawerStatus, isCashDrawerCounters, isCashDrawerStatus,
} from './cash-drawer-status.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetCashDrawerStatusTaskResult = {
	counters: CashDrawerCounters;
	cashDrawerStatus: CashDrawerStatus;
};

export const isGetCashDrawerStatusTaskResult = structureValidator<GetCashDrawerStatusTaskResult>({
	counters: isCashDrawerCounters,
	cashDrawerStatus: isCashDrawerStatus,
});
