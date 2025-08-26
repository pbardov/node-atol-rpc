import structureValidator from '../common/types/structure-validator.js';
import { isFiscalParams, type FiscalParams } from './fiscal-params.js';
import { isResultWarnings, type ResultWarnings } from './result-warnings.js';
import {makeOpt} from '../common/types/is-opt.js';

export type CloseArchiveTaskResult = {
  fiscalParams: FiscalParams;
  warnings?: ResultWarnings;
};

export const isCloseArchiveTaskResult = structureValidator<CloseArchiveTaskResult>({
  fiscalParams: isFiscalParams,
  warnings: makeOpt(isResultWarnings),
});
