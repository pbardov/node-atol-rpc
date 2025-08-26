import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';

export type OfdStatus = {
  notSentCount: number;
  notSentFirstDocDateTime: string;
  notSentFirstDocNumber: number;
};

export const isOfdStatus = structureValidator<OfdStatus>({
  notSentCount: isNumber,
  notSentFirstDocDateTime: isString,
  notSentFirstDocNumber: isNumber,
});
