import { isCashDrawerCounters, isCashDrawerStatus, } from './cash-drawer-status.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetCashDrawerStatusTaskResult = structureValidator({
    counters: isCashDrawerCounters,
    cashDrawerStatus: isCashDrawerStatus,
});
