import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import {
	type CloseShiftTask, isCloseShiftTask, isOpenShiftTask, type OpenShiftTask,
} from './shift.task.js';
import {
	type CloseShiftTaskResult,
	isCloseShiftTaskResult,
	isOpenShiftTaskResult,
	type ShiftTaskResult,
} from './shift.task-result.js';
import {type TypeGuardMap} from '../common/types/type-guard.js';
import structureValidator from '../common/types/structure-validator.js';
import {
	type BuyReturnTask,
	type BuyTask, isBuyReturnTask,
	isBuyTask,
	isSellReturnTask,
	isSellTask,
	type SellReturnTask,
	type SellTask,
} from './fiscal.task.js';
import {
	type BuyReturnTaskResult,
	type BuyTaskResult, isBuyReturnTaskResult, isBuyTaskResult, isSellReturnTaskResult,
	isSellTaskResult,
	type SellReturnTaskResult,
	type SellTaskResult,
} from './fiscal.task-result.js';
import {type ContinuePrintTask, isContinuePrint} from './continue-print.task.js';
import {isVoidTaskResult, type VoidTaskResult} from './void.task-result.js';
import {isPrintLastReceiptCopyTask, type PrintLastReceiptCopyTask} from './print-last-receipt-copy.task.js';
import {type GetDeviceStatusTask, isGetDeviceStatusTask} from './get-device-status.task.js';
import {type GetDeviceStatusTaskResult, isGetDeviceStatusTaskResult} from './get-device-status.task-result.js';
import {type GetDeviceInfoTask, isGetDeviceInfoTask} from './get-device-info.task.js';
import {type GetDeviceInfoTaskResult, isGetDeviceInfoTaskResult} from './get-device-info.task-result.js';
import {type GetMcuTask, isGetMcuTask} from './get-mcu.task.js';
import {type GetMcuTaskResult, isGetMcuTaskResult} from './get-mcu.task-result.js';
import {type GetCashDrawerStatusTask, isGetCashDrawerStatusTask} from './get-cash-drawer-status.task.js';
import {type GetCashDrawerStatusTaskResult, isGetCashDrawerStatusTaskResult} from './get-cash-drawer-status.task-result.js';
import {type GetShiftStatusTask, isGetShiftStatusTask} from './get-shift-status.task.js';
import {type GetShiftStatusTaskResult, isGetShiftStatusTaskResult} from './get-shift-status.task-result.js';
import {type GetFnInfoTask, isGetFnInfoTask} from './get-fn-info.task.js';
import {type GetFnInfoTaskResult, isGetFnInfoTaskResult} from './get-fn-info.task-result.js';
import {type GetFnStatusTask, isGetFnStatusTask} from './get-fn-status.task.js';
import {type GetFnStatusTaskResult, isGetFnStatusTaskResult} from './get-fn-status.task-result.js';
import {isOfdExchangeStatusTask, type OfdExchangeStatusTask} from './ofd-exchange-status.task.js';
import {isOfdExchangeStatusTaskResult, type OfdExchangeStatusTaskResult} from './ofd-exchange-status.task-result.js';
import {type GetShiftTotalsTask, isGetShiftTotalsTask} from './get-shift-totals.task.js';
import {type GetShiftTotalsTaskResult, isGetShiftTotalsTaskResult} from './get-shift-totals.task-result.js';
import {type GetOverallTotalsTask, isGetOverallTotalsTask} from './get-overall-totals.task.js';
import {type GetDepartmentSumTask, isGetDepartmentSumTask} from './get-department-sum.task.js';
import {type GetDepartmentSumTaskResult, isGetDepartmentSumTaskResult} from './get-department-sum.task-result.js';
import {isReportXTask, type ReportXTask} from './report-x.task.js';
import {
	type BuyCorrectionTask,
	type BuyReturnCorrectionTask,
	isBuyCorrectionTask,
	isBuyReturnCorrectionTask,
	isSellCorrectionTask,
	isSellReturnCorrectionTask,
	type SellCorrectionTask,
	type SellReturnCorrectionTask
} from './correction.task.js';
import {
	type BuyCorrectionTaskResult,
	type BuyReturnCorrectionTaskResult,
	isBuyCorrectionTaskResult, isBuyReturnCorrectionTaskResult,
	isSellCorrectionTaskResult, isSellReturnCorrectionTaskResult,
	type SellCorrectionTaskResult,
	type SellReturnCorrectionTaskResult
} from './correction.task-result.js';
import {isNonfiscalTask, type NonfiscalTask} from './nonfiscal.task.js';
import {type CashInTask, type CashOutTask, isCashInTask, isCashOutTask} from './cash.task.js';
import {type CashTaskResult, isCashTaskResult} from './cash.task-result.js';
import {isReportOfdExchangeStatusTask, type ReportOfdExchangeStatusTask} from './report-ofd-exchange-status.task.js';
import {
	isReportOfdExchangeStatusTaskResult,
	type ReportOfdExchangeStatusTaskResult
} from './report-ofd-exchange-status.task-result.js';
import {isPrintFnDocumentTask, type PrintFnDocumentTask} from './print-fn-document.task.js';
import {type GetRegistrationInfoTask, isGetRegistrationInfoTask} from './get-registration-info.task.js';
import {
	type GetRegistrationInfoTaskResult,
	isGetRegistrationInfoTaskResult
} from './get-registration-info.task-result.js';
import {
	type ChangeRegistrationParametersTask,
	type FnChangeTask, isChangeRegistrationParametersTask, isFnChangeTask,
	isRegistrationTask,
	type RegistrationTask
} from './registration.task.js';
import {
	type ChangeRegistrationParametersTaskResult,
	type FnChangeTaskResult, isChangeRegistrationParametersTaskResult, isFnChangeTaskResult, isRegistrationTaskResult,
	type RegistrationTaskResult
} from './registration.task-result.js';
import {type CloseArchiveTask, isCloseArchiveTask} from './close-archive.task.js';
import {type CloseArchiveTaskResult, isCloseArchiveTaskResult} from './close-archive.task-result.js';
import {isOpenCashDrawerTask, type OpenCashDrawerTask} from './open-cash-drawer.task.js';
import {isSetDateTimeTask, type SetDateTimeTask} from './set-date-time.task.js';
import {type GetDeviceParametersTask, isGetDeviceParametersTask} from './get-device-parameters.task.js';
import {
	type GetDeviceParametersTaskResult,
	isGetDeviceParametersTaskResult
} from './get-device-parameters.task-result.js';
import {isSetDeviceParametersTask, type SetDeviceParametersTask} from './set-device-parameters.task.js';
import {
	isSetDeviceParametersTaskResult,
	type SetDeviceParametersTaskResult
} from './set-device-parameters.task-result.js';
import {type GetFnDocumentTask, isGetFnDocumentTask} from './get-fn-document.task.js';
import {type GetFnDocumentTaskResult, isGetFnDocumentTaskResult} from './get-fn-document.task-result.js';

export type JsonTask = {
	type: JsonTaskType;
};

export type JsonTaskParam<P> = Omit<P, 'type'>;

export const isJsonTask = structureValidator<JsonTask>({
	type: isJsonTaskType,
});

export type JsonTaskMap = {
	[JsonTaskType.continuePrint]: ContinuePrintTask;
	[JsonTaskType.openShift]: OpenShiftTask;
	[JsonTaskType.closeShift]: CloseShiftTask;
	[JsonTaskType.sell]: SellTask;
	[JsonTaskType.buy]: BuyTask;
	[JsonTaskType.sellReturn]: SellReturnTask;
	[JsonTaskType.buyReturn]: BuyReturnTask;
	[JsonTaskType.sellCorrection]: SellCorrectionTask;
	[JsonTaskType.buyCorrection]: BuyCorrectionTask;
	[JsonTaskType.sellReturnCorrection]: SellReturnCorrectionTask;
	[JsonTaskType.buyReturnCorrection]: BuyReturnCorrectionTask;
	[JsonTaskType.nonFiscal]: NonfiscalTask;
	[JsonTaskType.cashIn]: CashInTask;
	[JsonTaskType.cashOut]: CashOutTask;
	[JsonTaskType.reportOfdExchangeStatus]: ReportOfdExchangeStatusTask;
	[JsonTaskType.printFnDocument]: PrintFnDocumentTask;
	[JsonTaskType.printLastReceiptCopy]: PrintLastReceiptCopyTask;
	[JsonTaskType.getRegistrationInfo]: GetRegistrationInfoTask;
	[JsonTaskType.registration]: RegistrationTask;
	[JsonTaskType.fnChange]: FnChangeTask;
	[JsonTaskType.changeRegistrationParameters]: ChangeRegistrationParametersTask;
	[JsonTaskType.closeArchive]: CloseArchiveTask;
	[JsonTaskType.openCashDrawer]: OpenCashDrawerTask;
	[JsonTaskType.setDateTime]: SetDateTimeTask;
	[JsonTaskType.getDeviceParameters]: GetDeviceParametersTask;
	[JsonTaskType.setDeviceParameters]: SetDeviceParametersTask;
	[JsonTaskType.getDeviceStatus]: GetDeviceStatusTask;
	[JsonTaskType.getDeviceInfo]: GetDeviceInfoTask;
	[JsonTaskType.getMcu]: GetMcuTask;
	[JsonTaskType.getCashDrawerStatus]: GetCashDrawerStatusTask;
	[JsonTaskType.getShiftStatus]: GetShiftStatusTask;
	[JsonTaskType.getFnInfo]: GetFnInfoTask;
	[JsonTaskType.getFnStatus]: GetFnStatusTask;
	[JsonTaskType.ofdExchangeStatus]: OfdExchangeStatusTask;
	[JsonTaskType.getShiftTotals]: GetShiftTotalsTask;
	[JsonTaskType.getOverallTotals]: GetOverallTotalsTask;
	[JsonTaskType.getFnDocument]: GetFnDocumentTask;
	[JsonTaskType.getDepartmentSum]: GetDepartmentSumTask;
	[JsonTaskType.reportX]: ReportXTask;
};

export type JsonTaskResultMap = {
	[JsonTaskType.continuePrint]: VoidTaskResult;
	[JsonTaskType.openShift]: ShiftTaskResult;
	[JsonTaskType.closeShift]: CloseShiftTaskResult;
	[JsonTaskType.sell]: SellTaskResult;
	[JsonTaskType.buy]: BuyTaskResult;
	[JsonTaskType.sellReturn]: SellReturnTaskResult;
	[JsonTaskType.buyReturn]: BuyReturnTaskResult;
	[JsonTaskType.sellCorrection]: SellCorrectionTaskResult;
	[JsonTaskType.buyCorrection]: BuyCorrectionTaskResult;
	[JsonTaskType.sellReturnCorrection]: SellReturnCorrectionTaskResult;
	[JsonTaskType.buyReturnCorrection]: BuyReturnCorrectionTaskResult;
	[JsonTaskType.nonFiscal]: VoidTaskResult;
	[JsonTaskType.cashIn]: CashTaskResult;
	[JsonTaskType.cashOut]: CashTaskResult;
	[JsonTaskType.reportOfdExchangeStatus]: ReportOfdExchangeStatusTaskResult;
	[JsonTaskType.printFnDocument]: VoidTaskResult;
	[JsonTaskType.printLastReceiptCopy]: VoidTaskResult;
	[JsonTaskType.getRegistrationInfo]: GetRegistrationInfoTaskResult;
	[JsonTaskType.registration]: RegistrationTaskResult;
	[JsonTaskType.fnChange]: FnChangeTaskResult;
	[JsonTaskType.changeRegistrationParameters]: ChangeRegistrationParametersTaskResult;
	[JsonTaskType.closeArchive]: CloseArchiveTaskResult;
	[JsonTaskType.openCashDrawer]: VoidTaskResult;
	[JsonTaskType.setDateTime]: VoidTaskResult;
	[JsonTaskType.getDeviceParameters]: GetDeviceParametersTaskResult;
	[JsonTaskType.setDeviceParameters]: SetDeviceParametersTaskResult;
	[JsonTaskType.getDeviceStatus]: GetDeviceStatusTaskResult;
	[JsonTaskType.getDeviceInfo]: GetDeviceInfoTaskResult;
	[JsonTaskType.getMcu]: GetMcuTaskResult;
	[JsonTaskType.getCashDrawerStatus]: GetCashDrawerStatusTaskResult;
	[JsonTaskType.getShiftStatus]: GetShiftStatusTaskResult;
	[JsonTaskType.getFnInfo]: GetFnInfoTaskResult;
	[JsonTaskType.getFnStatus]: GetFnStatusTaskResult;
	[JsonTaskType.ofdExchangeStatus]: OfdExchangeStatusTaskResult;
	[JsonTaskType.getShiftTotals]: GetShiftTotalsTaskResult;
	[JsonTaskType.getOverallTotals]: GetShiftTotalsTaskResult;
	[JsonTaskType.getFnDocument]: GetFnDocumentTaskResult;
	[JsonTaskType.getDepartmentSum]: GetDepartmentSumTaskResult;
	[JsonTaskType.reportX]: VoidTaskResult;
};

// export type JsonTaskDriver = {
// 	[K in keyof JsonTaskMap]: (p?: JsonTaskParam<JsonTaskMap[K]>) => Promise<JsonTaskResultMap[K]>;
// };

export const jsonTaskTypeGuards: TypeGuardMap<JsonTaskMap> = {
	[JsonTaskType.continuePrint]: isContinuePrint,
	[JsonTaskType.openShift]: isOpenShiftTask,
	[JsonTaskType.closeShift]: isCloseShiftTask,
	[JsonTaskType.sell]: isSellTask,
	[JsonTaskType.buy]: isBuyTask,
	[JsonTaskType.sellReturn]: isSellReturnTask,
	[JsonTaskType.buyReturn]: isBuyReturnTask,
	[JsonTaskType.sellCorrection]: isSellCorrectionTask,
	[JsonTaskType.buyCorrection]: isBuyCorrectionTask,
	[JsonTaskType.sellReturnCorrection]: isSellReturnCorrectionTask,
	[JsonTaskType.buyReturnCorrection]: isBuyReturnCorrectionTask,
	[JsonTaskType.nonFiscal]: isNonfiscalTask,
	[JsonTaskType.cashIn]: isCashInTask,
	[JsonTaskType.cashOut]: isCashOutTask,
	[JsonTaskType.reportOfdExchangeStatus]: isReportOfdExchangeStatusTask,
	[JsonTaskType.printFnDocument]: isPrintFnDocumentTask,
	[JsonTaskType.printLastReceiptCopy]: isPrintLastReceiptCopyTask,
	[JsonTaskType.getRegistrationInfo]: isGetRegistrationInfoTask,
	[JsonTaskType.registration]: isRegistrationTask,
	[JsonTaskType.fnChange]: isFnChangeTask,
	[JsonTaskType.changeRegistrationParameters]: isChangeRegistrationParametersTask,
	[JsonTaskType.closeArchive]: isCloseArchiveTask,
	[JsonTaskType.openCashDrawer]: isOpenCashDrawerTask,
	[JsonTaskType.setDateTime]: isSetDateTimeTask,
	[JsonTaskType.getDeviceParameters]: isGetDeviceParametersTask,
	[JsonTaskType.setDeviceParameters]: isSetDeviceParametersTask,
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
	[JsonTaskType.getFnDocument]: isGetFnDocumentTask,
	[JsonTaskType.getDepartmentSum]: isGetDepartmentSumTask,
	[JsonTaskType.reportX]: isReportXTask,
} as const;

export const jsonTaskResultTypeGuards: TypeGuardMap<JsonTaskResultMap> = {
	[JsonTaskType.continuePrint]: isVoidTaskResult,
	[JsonTaskType.openShift]: isOpenShiftTaskResult,
	[JsonTaskType.closeShift]: isCloseShiftTaskResult,
	[JsonTaskType.sell]: isSellTaskResult,
	[JsonTaskType.buy]: isBuyTaskResult,
	[JsonTaskType.sellReturn]: isSellReturnTaskResult,
	[JsonTaskType.buyReturn]: isBuyReturnTaskResult,
	[JsonTaskType.sellCorrection]: isSellCorrectionTaskResult,
	[JsonTaskType.buyCorrection]: isBuyCorrectionTaskResult,
	[JsonTaskType.sellReturnCorrection]: isSellReturnCorrectionTaskResult,
	[JsonTaskType.buyReturnCorrection]: isBuyReturnCorrectionTaskResult,
	[JsonTaskType.nonFiscal]: isVoidTaskResult,
	[JsonTaskType.cashIn]: isCashTaskResult,
	[JsonTaskType.cashOut]: isCashTaskResult,
	[JsonTaskType.reportOfdExchangeStatus]: isReportOfdExchangeStatusTaskResult,
	[JsonTaskType.printFnDocument]: isVoidTaskResult,
	[JsonTaskType.printLastReceiptCopy]: isVoidTaskResult,
	[JsonTaskType.getRegistrationInfo]: isGetRegistrationInfoTaskResult,
	[JsonTaskType.registration]: isRegistrationTaskResult,
	[JsonTaskType.fnChange]: isFnChangeTaskResult,
	[JsonTaskType.changeRegistrationParameters]: isChangeRegistrationParametersTaskResult,
	[JsonTaskType.closeArchive]: isCloseArchiveTaskResult,
	[JsonTaskType.openCashDrawer]: isVoidTaskResult,
	[JsonTaskType.setDateTime]: isVoidTaskResult,
	[JsonTaskType.getDeviceParameters]: isGetDeviceParametersTaskResult,
	[JsonTaskType.setDeviceParameters]: isSetDeviceParametersTaskResult,
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
	[JsonTaskType.getFnDocument]: isGetFnDocumentTaskResult,
	[JsonTaskType.getDepartmentSum]: isGetDepartmentSumTaskResult,
	[JsonTaskType.reportX]: isVoidTaskResult,
};
