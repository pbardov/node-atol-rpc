import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';
import structureValidator from '../common/types/structure-validator.js';
import { makeOpt } from '../common/types/is-opt.js';

export type DeviceParams = {
  paymentsAddress?: string;
  fnsUrl?: string;
  registrationNumber?: string;
  offlineMode?: boolean;
  machineInstallation?: boolean;
  bso?: boolean;
  encryption?: boolean;
  autoMode?: boolean;
  machineNumber?: string;
  internet?: boolean;
  service?: boolean;
  gambling?: boolean;
  lottery?: boolean;
  excise?: boolean;
  defaultTaxationType?: string; // Assuming you have a type or enum for TaxationType
  ofdChannel?: string;
  ffdVersion?: string;
};

export const isDeviceParams = structureValidator<DeviceParams>({
  paymentsAddress: makeOpt(isString),
  fnsUrl: makeOpt(isString),
  registrationNumber: makeOpt(isString),
  offlineMode: makeOpt(isBoolean),
  machineInstallation: makeOpt(isBoolean),
  bso: makeOpt(isBoolean),
  encryption: makeOpt(isBoolean),
  autoMode: makeOpt(isBoolean),
  machineNumber: makeOpt(isString),
  internet: makeOpt(isBoolean),
  service: makeOpt(isBoolean),
  gambling: makeOpt(isBoolean),
  lottery: makeOpt(isBoolean),
  excise: makeOpt(isBoolean),
  defaultTaxationType: makeOpt(isString), // Add specific validator if needed
  ofdChannel: makeOpt(isString),
  ffdVersion: makeOpt(isString),
});
