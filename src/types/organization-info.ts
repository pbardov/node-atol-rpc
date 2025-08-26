import isString from '../common/types/is-string.js';
import structureValidator from '../common/types/structure-validator.js';
import { makeOpt } from '../common/types/is-opt.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';

export type OrganizationInfo = {
  name: string;
  vatin: string;
  email?: string;
  taxationTypes?: string[]; // Assuming there's a TaxationType or similar type
  agents?: string[]; // Assuming there's a specific type or enum for agents
  address?: string;
};

export const isOrganizationInfo = structureValidator<OrganizationInfo>({
  name: isString,
  vatin: isString,
  email: makeOpt(isString),
  taxationTypes: makeOpt(arrayTypeGuard(isString)), // Specific validator if needed
  agents: makeOpt(arrayTypeGuard(isString)),
  address: makeOpt(isString),
});
