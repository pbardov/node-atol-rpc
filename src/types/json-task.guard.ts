import type {TypeGuardMap} from '../common/types/type-guard.js';
import type {JsonTaskMap} from './json-task.map.js';
import {JsonTaskType} from './json-task-type.js';
import {isContinuePrint} from './continue-print.task.js';
import {isCloseShiftTask, isOpenShiftTask} from './shift.task.js';
import {isBuyReturnTask, isBuyTask, isSellReturnTask, isSellTask} from './fiscal.task.js';
import {
    isBuyCorrectionTask,
    isBuyReturnCorrectionTask,
    isSellCorrectionTask,
    isSellReturnCorrectionTask
} from './correction.task.js';
import {isNonfiscalTask} from './nonfiscal.task.js';
import {isCashInTask, isCashOutTask} from './cash.task.js';
import {isReportOfdExchangeStatusTask} from './report-ofd-exchange-status.task.js';
import {isPrintFnDocumentTask} from './print-fn-document.task.js';
import {isPrintLastReceiptCopyTask} from './print-last-receipt-copy.task.js';
import {isGetRegistrationInfoTask} from './get-registration-info.task.js';
import {isChangeRegistrationParametersTask, isFnChangeTask, isRegistrationTask} from './registration.task.js';
import {isCloseArchiveTask} from './close-archive.task.js';
import {isOpenCashDrawerTask} from './open-cash-drawer.task.js';
import {isSetDateTimeTask} from './set-date-time.task.js';
import {isGetDeviceParametersTask} from './get-device-parameters.task.js';
import {isSetDeviceParametersTask} from './set-device-parameters.task.js';
import {isGetDeviceStatusTask} from './get-device-status.task.js';
import {isGetDeviceInfoTask} from './get-device-info.task.js';
import {isGetMcuTask} from './get-mcu.task.js';
import {isGetCashDrawerStatusTask} from './get-cash-drawer-status.task.js';
import {isGetShiftStatusTask} from './get-shift-status.task.js';
import {isGetFnInfoTask} from './get-fn-info.task.js';
import {isGetFnStatusTask} from './get-fn-status.task.js';
import {isOfdExchangeStatusTask} from './ofd-exchange-status.task.js';
import {isGetShiftTotalsTask} from './get-shift-totals.task.js';
import {isGetOverallTotalsTask} from './get-overall-totals.task.js';
import {isGetFnDocumentTask} from './get-fn-document.task.js';
import {isGetDepartmentSumTask} from './get-department-sum.task.js';
import {isReportXTask} from './report-x.task.js';
import {isGetLicensesTask} from './get-licenses.task.js';
import {isReportDepartmentsTask} from './report-departments.task.js';
import {isReportFnRegistrationsTask} from './report-fn-registrations.task.js';
import {isPrintDocumentsFromJournalTask} from './print-documents-from-journal.task.js';
import {isIsmExchangeStatusTask} from './ism-exchange-status.task.js';
import {isBeginMarkingCodeValidationTask} from './begin-marking-code-validation.task.js';
import {isGetMarkingCodeValidationStatusTask} from './get-marking-code-validation-status.task.js';
import {isAcceptMarkingCodeTask} from './accept-marking-code.task.js';
import {isDeclineMarkingCodeTask} from './decline-marking-code.task.js';
import {isCancelMarkingCodeValidationTask} from './cancel-marking-code-validation.task.js';

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
    [JsonTaskType.getLicenses]: isGetLicensesTask,
    [JsonTaskType.reportDepartments]: isReportDepartmentsTask,
    [JsonTaskType.reportFnRegistrations]: isReportFnRegistrationsTask,
    [JsonTaskType.printDocumentsFromJournal]: isPrintDocumentsFromJournalTask,
    [JsonTaskType.ismExchangeStatus]: isIsmExchangeStatusTask,
    [JsonTaskType.beginMarkingCodeValidation]: isBeginMarkingCodeValidationTask,
    [JsonTaskType.getMarkingCodeValidationStatus]: isGetMarkingCodeValidationStatusTask,
    [JsonTaskType.acceptMarkingCode]: isAcceptMarkingCodeTask,
    [JsonTaskType.declineMarkingCode]: isDeclineMarkingCodeTask,
    [JsonTaskType.cancelMarkingCodeValidation]: isCancelMarkingCodeValidationTask,
} as const;
