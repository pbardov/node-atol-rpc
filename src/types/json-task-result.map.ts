import {JsonTaskType} from './json-task-type.js';
import type {VoidTaskResult} from './void.task-result.js';
import type {CloseShiftTaskResult, ShiftTaskResult} from './shift.task-result.js';
import type {BuyReturnTaskResult, BuyTaskResult, SellReturnTaskResult, SellTaskResult} from './fiscal.task-result.js';
import type {
    BuyCorrectionTaskResult, BuyReturnCorrectionTaskResult,
    SellCorrectionTaskResult,
    SellReturnCorrectionTaskResult
} from './correction.task-result.js';
import type {CashTaskResult} from './cash.task-result.js';
import type {ReportOfdExchangeStatusTaskResult} from './report-ofd-exchange-status.task-result.js';
import type {GetRegistrationInfoTaskResult} from './get-registration-info.task-result.js';
import type {
    ChangeRegistrationParametersTaskResult,
    FnChangeTaskResult,
    RegistrationTaskResult
} from './registration.task-result.js';
import type {CloseArchiveTaskResult} from './close-archive.task-result.js';
import type {GetDeviceParametersTaskResult} from './get-device-parameters.task-result.js';
import type {SetDeviceParametersTaskResult} from './set-device-parameters.task-result.js';
import type {GetDeviceStatusTaskResult} from './get-device-status.task-result.js';
import type {GetDeviceInfoTaskResult} from './get-device-info.task-result.js';
import type {GetMcuTaskResult} from './get-mcu.task-result.js';
import type {GetCashDrawerStatusTaskResult} from './get-cash-drawer-status.task-result.js';
import type {GetShiftStatusTaskResult} from './get-shift-status.task-result.js';
import type {GetFnInfoTaskResult} from './get-fn-info.task-result.js';
import type {GetFnStatusTaskResult} from './get-fn-status.task-result.js';
import type {OfdExchangeStatusTaskResult} from './ofd-exchange-status.task-result.js';
import type {GetShiftTotalsTaskResult} from './get-shift-totals.task-result.js';
import type {GetFnDocumentTaskResult} from './get-fn-document.task-result.js';
import type {GetDepartmentSumTaskResult} from './get-department-sum.task-result.js';
import type {GetLicensesTaskResult} from './get-licenses.task-result.js';
import type {ReportDepartmentsTaskResult} from './report-departments.task-result.js';
import type {ReportFnRegistrationsTaskResult} from './report-fn-registrations.task-result.js';
import type {IsmExchangeStatusTaskResult} from './ism-exchange-status.task-result.js';
import type {BeginMarkingCodeValidationTaskResult} from './begin-marking-code-validation.task-result.js';
import type {GetMarkingCodeValidationStatusTaskResult} from './get-marking-code-validation-status.task-result.js';
import type {AcceptMarkingCodeTaskResult} from './accept-marking-code.task-result.js';
import type {CheckMarkingCodeValidationReadyTaskResult} from './check-marking-code-validation-ready.task-result.js';
import type {ValidateMarksTaskResult} from './validate-marks.task-result.js';
import type {AddMarksToBufferTaskResult} from './add-marks-to-buffer.task-result.js';
import type {CheckImcWorkStateTaskResult} from './check-imc-work-state.task-result.js';

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
    [JsonTaskType.getLicenses]: GetLicensesTaskResult;
    [JsonTaskType.reportX]: VoidTaskResult;
    [JsonTaskType.reportDepartments]: ReportDepartmentsTaskResult;
    [JsonTaskType.reportFnRegistrations]: ReportFnRegistrationsTaskResult;
    [JsonTaskType.printDocumentsFromJournal]: VoidTaskResult;
    [JsonTaskType.ismExchangeStatus]: IsmExchangeStatusTaskResult;
    [JsonTaskType.beginMarkingCodeValidation]: BeginMarkingCodeValidationTaskResult;
    [JsonTaskType.getMarkingCodeValidationStatus]: GetMarkingCodeValidationStatusTaskResult;
    [JsonTaskType.acceptMarkingCode]: AcceptMarkingCodeTaskResult;
    [JsonTaskType.declineMarkingCode]: VoidTaskResult;
    [JsonTaskType.cancelMarkingCodeValidation]: VoidTaskResult;
    [JsonTaskType.clearMarkingCodeValidationResult]: VoidTaskResult;
    [JsonTaskType.checkMarkingCodeValidationsReady]: CheckMarkingCodeValidationReadyTaskResult;
    [JsonTaskType.validateMarks]: ValidateMarksTaskResult;
    [JsonTaskType.addMarksToBuffer]: AddMarksToBufferTaskResult;
    [JsonTaskType.checkImcWorkState]: CheckImcWorkStateTaskResult;
};
