import type {TypeGuardMap} from '../common/types/type-guard.js';
import type {JsonTaskResultMap} from './json-task-result.map.js';
import {JsonTaskType} from './json-task-type.js';
import {isVoidTaskResult} from './void.task-result.js';
import {isCloseShiftTaskResult, isOpenShiftTaskResult} from './shift.task-result.js';
import {
    isBuyReturnTaskResult,
    isBuyTaskResult,
    isSellReturnTaskResult,
    isSellTaskResult
} from './fiscal.task-result.js';
import {
    isBuyCorrectionTaskResult, isBuyReturnCorrectionTaskResult,
    isSellCorrectionTaskResult,
    isSellReturnCorrectionTaskResult
} from './correction.task-result.js';
import {isCashTaskResult} from './cash.task-result.js';
import {isReportOfdExchangeStatusTaskResult} from './report-ofd-exchange-status.task-result.js';
import {isGetRegistrationInfoTaskResult} from './get-registration-info.task-result.js';
import {
    isChangeRegistrationParametersTaskResult,
    isFnChangeTaskResult,
    isRegistrationTaskResult
} from './registration.task-result.js';
import {isCloseArchiveTaskResult} from './close-archive.task-result.js';
import {isGetDeviceParametersTaskResult} from './get-device-parameters.task-result.js';
import {isSetDeviceParametersTaskResult} from './set-device-parameters.task-result.js';
import {isGetDeviceStatusTaskResult} from './get-device-status.task-result.js';
import {isGetDeviceInfoTaskResult} from './get-device-info.task-result.js';
import {isGetMcuTaskResult} from './get-mcu.task-result.js';
import {isGetCashDrawerStatusTaskResult} from './get-cash-drawer-status.task-result.js';
import {isGetShiftStatusTaskResult} from './get-shift-status.task-result.js';
import {isGetFnInfoTaskResult} from './get-fn-info.task-result.js';
import {isGetFnStatusTaskResult} from './get-fn-status.task-result.js';
import {isOfdExchangeStatusTaskResult} from './ofd-exchange-status.task-result.js';
import {isGetShiftTotalsTaskResult} from './get-shift-totals.task-result.js';
import {isGetFnDocumentTaskResult} from './get-fn-document.task-result.js';
import {isGetDepartmentSumTaskResult} from './get-department-sum.task-result.js';
import {isGetLicensesTaskResult} from './get-licenses.task-result.js';
import {isReportDepartmentsTaskResult} from './report-departments.task-result.js';
import {isReportFnRegistrationsTaskResult} from './report-fn-registrations.task-result.js';
import {isIsmExchangeStatusTaskResult} from './ism-exchange-status.task-result.js';
import {isBeginMarkingCodeValidationTaskResult} from './begin-marking-code-validation.task-result.js';

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
    [JsonTaskType.getLicenses]: isGetLicensesTaskResult,
    [JsonTaskType.reportX]: isVoidTaskResult,
    [JsonTaskType.reportDepartments]: isReportDepartmentsTaskResult,
    [JsonTaskType.reportFnRegistrations]: isReportFnRegistrationsTaskResult,
    [JsonTaskType.printDocumentsFromJournal]: isVoidTaskResult,
    [JsonTaskType.ismExchangeStatus]: isIsmExchangeStatusTaskResult,
    [JsonTaskType.beginMarkingCodeValidation]: isBeginMarkingCodeValidationTaskResult,
};
