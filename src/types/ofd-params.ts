import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';
import structureValidator from '../common/types/structure-validator.js';

export type OfdParams = {
  name: string;
  vatin: string;
  host: string;
  port: number;
  dns: string;
};

export const isOfdParams = structureValidator<OfdParams>({
  name: isString,
  vatin: isString,
  host: isString,
  port: isNumber,
  dns: isString,
});
