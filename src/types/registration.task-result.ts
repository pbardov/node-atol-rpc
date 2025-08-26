import structureValidator from '../common/types/structure-validator.js';
import { isFiscalParams, type FiscalParams } from './fiscal-params.js';
import { isResultWarnings, type ResultWarnings } from './result-warnings.js';
import {makeOpt} from '../common/types/is-opt.js';

export type RegistrationTaskResult = {
  fiscalParams: FiscalParams;
  warnings?: ResultWarnings;
};

export type FnChangeTaskResult = RegistrationTaskResult;
export type ChangeRegistrationParametersTaskResult = RegistrationTaskResult;

export const isRegistrationTaskResult = structureValidator<RegistrationTaskResult>({
  fiscalParams: isFiscalParams,
  warnings: makeOpt(isResultWarnings)
});

export const isFnChangeTaskResult = isRegistrationTaskResult;
export const isChangeRegistrationParametersTaskResult = isRegistrationTaskResult;
