import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';
import isEnumOf from '../common/types/is-enum-of.js';
import isString from '../common/types/is-string.js';

// Define the enum for Fiscal Document Types
export enum FiscalDocumentType {
  Registration = 'registration',
  ChangeRegistrationParameters = 'changeRegistrationParameters',
  CloseArchive = 'closeArchive',
  OfdExchangeStatus = 'ofdExchangeStatus',
  OpenShift = 'openShift',
  CloseShift = 'closeShift',
  Receipt = 'receipt',
  ReceiptCorrection = 'receiptCorrection',
  Bso = 'bso',
  BsoCorrection = 'bsoCorrection',
}

// Type guard for the FiscalDocumentType enum
export const isFiscalDocumentType = isEnumOf(FiscalDocumentType);

export type DocumentTLV = {
  [key: number]: string;
  fiscalDocumentType: FiscalDocumentType;
  short: boolean;
  qr: string;
};

export const isDocumentTLV = structureValidator<DocumentTLV>({
  fiscalDocumentType: isFiscalDocumentType,
  short: isBoolean,
  qr: isString,
});
