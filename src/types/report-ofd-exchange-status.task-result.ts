import structureValidator from '../common/types/structure-validator.js';
import {isFiscalParams, type FiscalParams} from './fiscal-params.js';
import {isOfdErrors, type OfdErrors} from './ofd-errors.js';
import {isOfdStatus, type OfdStatus} from './ofd-status.js';
import {isResultWarnings, type ResultWarnings} from './result-warnings.js';

export type ReportOfdExchangeStatusTaskResult = {
  fiscalParams: FiscalParams;
  errors: OfdErrors;
  status: OfdStatus;
  warnings?: ResultWarnings;
};

export const isReportOfdExchangeStatusTaskResult = structureValidator<ReportOfdExchangeStatusTaskResult>({
  fiscalParams: isFiscalParams,
  errors: isOfdErrors,
  status: isOfdStatus,
  warnings: isResultWarnings,
});
