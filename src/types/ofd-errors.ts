import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';

// Define the type for FN, Network, and OFD error descriptions
export type ErrorDescription = {
  code: number;
  description: string;
};

// Validator for ErrorDescription type
export const isErrorDescription = structureValidator<ErrorDescription>({
  code: isNumber,
  description: isString,
});

export type OfdErrors = {
  fnCommandCode: number;
  documentNumber: number;
  fn: ErrorDescription;
  network: ErrorDescription;
  ofd: ErrorDescription;
};

export const isOfdErrors = structureValidator<OfdErrors>({
  fnCommandCode: isNumber,
  documentNumber: isNumber,
  fn: isErrorDescription,
  network: isErrorDescription,
  ofd: isErrorDescription,
});
