import structureValidator from '../common/types/structure-validator.js';
import {isOfdErrors, type OfdErrors} from './ofd-errors.js';
import {isOfdStatus, type OfdStatus} from './ofd-status.js';
import {isResultWarnings, type ResultWarnings} from './result-warnings.js';
import {isReportFiscalParams, type ReportFiscalParams} from './report-fiscal-params.js';

export type ReportOfdExchangeStatusTaskResult = {
  fiscalParams: ReportFiscalParams;
  errors: OfdErrors;
  status: OfdStatus;
  warnings?: ResultWarnings;
};

export const isReportOfdExchangeStatusTaskResult = structureValidator<ReportOfdExchangeStatusTaskResult>({
  fiscalParams: isReportFiscalParams,
  errors: isOfdErrors,
  status: isOfdStatus,
  warnings: isResultWarnings,
});
