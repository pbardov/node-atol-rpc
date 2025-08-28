import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type License = {
  id: string;
  state: 'active';
};

export type Licenses = License[];

export const isLicense = structureValidator<License>({
  id: isString,
  state: (v: unknown): v is 'active' => v === 'active',
});

export const isLicenses = arrayTypeGuard(isLicense);

export type GetLicensesTaskResult = {
  licenses: Licenses;
};

export const isGetLicensesTaskResult = structureValidator<GetLicensesTaskResult>({
  licenses: isLicenses,
});
