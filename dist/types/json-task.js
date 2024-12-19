import { isJsonTaskType, JsonTaskType } from './json-task-type.js';
import { isCloseShiftTask, isOpenShiftTask, } from './shift.task.js';
import { isCloseShiftTaskResult, isOpenShiftTaskResult, } from './shift.task-result.js';
import structureValidator from '../common/types/structure-validator.js';
import { isBuyReturnTask, isBuyTask, isSellReturnTask, isSellTask, } from './fiscal.task.js';
import { isBuyReturnTaskResult, isBuyTaskResult, isSellReturnTaskResult, isSellTaskResult, } from './fiscal.task-result.js';
import { isContinuePrint } from './continue-print.task.js';
import { isVoidTaskResult } from './void.task-result.js';
import { isPrintLastReceiptCopyTask } from './print-last-receipt-copy.task.js';
import { isGetDeviceStatusTask } from './get-device-status.task.js';
import { isGetDeviceStatusTaskResult } from './get-device-status.task-result.js';
import { isGetDeviceInfoTask } from './get-device-info.task.js';
import { isGetDeviceInfoTaskResult } from './get-device-info.task-result.js';
import { isGetMcuTask } from './get-mcu.task.js';
import { isGetMcuTaskResult } from './get-mcu.task-result.js';
import { isGetCashDrawerStatusTask } from './get-cash-drawer-status.task.js';
import { isGetCashDrawerStatusTaskResult } from './get-cash-drawer-status.task-result.js';
import { isGetShiftStatusTask } from './get-shift-status.task.js';
import { isGetShiftStatusTaskResult } from './get-shift-status.task-result.js';
import { isGetFnInfoTask } from './get-fn-info.task.js';
import { isGetFnInfoTaskResult } from './get-fn-info.task-result.js';
import { isGetFnStatusTask } from './get-fn-status.task.js';
import { isGetFnStatusTaskResult } from './get-fn-status.task-result.js';
import { isOfdExchangeStatusTask } from './ofd-exchange-status.task.js';
import { isOfdExchangeStatusTaskResult } from './ofd-exchange-status.task-result.js';
import { isGetShiftTotalsTask } from './get-shift-totals.task.js';
import { isGetShiftTotalsTaskResult } from './get-shift-totals.task-result.js';
import { isGetOverallTotalsTask } from './get-overall-totals.task.js';
import { isGetDepartmentSumTask } from './get-department-sum.task.js';
import { isGetDepartmentSumTaskResult } from './get-department-sum.task-result.js';
import { isReportXTask } from './report-x.task.js';
export const isJsonTask = structureValidator({
    type: isJsonTaskType,
});
// export type JsonTaskDriver = {
// 	[K in keyof JsonTaskMap]: (p?: JsonTaskParam<JsonTaskMap[K]>) => Promise<JsonTaskResultMap[K]>;
// };
export const jsonTaskTypeGuards = {
    [JsonTaskType.continuePrint]: isContinuePrint,
    [JsonTaskType.openShift]: isOpenShiftTask,
    [JsonTaskType.closeShift]: isCloseShiftTask,
    [JsonTaskType.sell]: isSellTask,
    [JsonTaskType.buy]: isBuyTask,
    [JsonTaskType.sellReturn]: isSellReturnTask,
    [JsonTaskType.buyReturn]: isBuyReturnTask,
    [JsonTaskType.printLastReceiptCopy]: isPrintLastReceiptCopyTask,
    [JsonTaskType.getDeviceStatus]: isGetDeviceStatusTask,
    [JsonTaskType.getDeviceInfo]: isGetDeviceInfoTask,
    [JsonTaskType.getMcu]: isGetMcuTask,
    [JsonTaskType.getCashDrawerStatus]: isGetCashDrawerStatusTask,
    [JsonTaskType.getShiftStatus]: isGetShiftStatusTask,
    [JsonTaskType.getFnInfo]: isGetFnInfoTask,
    [JsonTaskType.getFnStatus]: isGetFnStatusTask,
    [JsonTaskType.ofdExchangeStatus]: isOfdExchangeStatusTask,
    [JsonTaskType.getShiftTotals]: isGetShiftTotalsTask,
    [JsonTaskType.getOverallTotals]: isGetOverallTotalsTask,
    [JsonTaskType.getDepartmentSum]: isGetDepartmentSumTask,
    [JsonTaskType.reportX]: isReportXTask,
};
export const jsonTaskResultTypeGuards = {
    [JsonTaskType.continuePrint]: isVoidTaskResult,
    [JsonTaskType.openShift]: isOpenShiftTaskResult,
    [JsonTaskType.closeShift]: isCloseShiftTaskResult,
    [JsonTaskType.sell]: isSellTaskResult,
    [JsonTaskType.buy]: isBuyTaskResult,
    [JsonTaskType.sellReturn]: isSellReturnTaskResult,
    [JsonTaskType.buyReturn]: isBuyReturnTaskResult,
    [JsonTaskType.printLastReceiptCopy]: isVoidTaskResult,
    [JsonTaskType.getDeviceStatus]: isGetDeviceStatusTaskResult,
    [JsonTaskType.getDeviceInfo]: isGetDeviceInfoTaskResult,
    [JsonTaskType.getMcu]: isGetMcuTaskResult,
    [JsonTaskType.getCashDrawerStatus]: isGetCashDrawerStatusTaskResult,
    [JsonTaskType.getShiftStatus]: isGetShiftStatusTaskResult,
    [JsonTaskType.getFnInfo]: isGetFnInfoTaskResult,
    [JsonTaskType.getFnStatus]: isGetFnStatusTaskResult,
    [JsonTaskType.ofdExchangeStatus]: isOfdExchangeStatusTaskResult,
    [JsonTaskType.getShiftTotals]: isGetShiftTotalsTaskResult,
    [JsonTaskType.getOverallTotals]: isGetShiftTotalsTaskResult,
    [JsonTaskType.getDepartmentSum]: isGetDepartmentSumTaskResult,
    [JsonTaskType.reportX]: isVoidTaskResult,
};
