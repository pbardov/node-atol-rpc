import isString from '../common/types/is-string.js';
import structureValidator from '../common/types/structure-validator.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import {isTaxationType, type TaxationType} from './taxation-type.js';
import {type Agent, isAgent} from './agent-info.js';

export type OrganizationInfo = {
  name: string;
  vatin: string;
  email: string;
  taxationTypes: TaxationType[];
  agents: Agent[];
  address: string;
};

export const isOrganizationInfo = structureValidator<OrganizationInfo>({
  name: isString,
  vatin: isString,
  email: isString,
  taxationTypes: arrayTypeGuard(isTaxationType), // Specific validator if needed
  agents: arrayTypeGuard(isAgent),
  address: isString,
});
