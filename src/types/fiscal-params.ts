import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';

export type FiscalParams = {
  fiscalDocumentNumber: number;
  fiscalDocumentSign: string;
  fiscalDocumentDateTime: string;
  shiftNumber: number;
  fnNumber: string;
  registrationNumber: string;
  fnsUrl: string;
};

export const fiscalParamsValidator = {
  fiscalDocumentNumber: isNumber,
  fiscalDocumentSign: isString,
  fiscalDocumentDateTime: isString,
  shiftNumber: isNumber,
  fnNumber: isString,
  registrationNumber: isString,
  fnsUrl: isString,
};

export const isFiscalParams = structureValidator<FiscalParams>(fiscalParamsValidator);
