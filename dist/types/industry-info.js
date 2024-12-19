import { isAtolDate } from './atol-date.js';
import structureValidator from '../common/types/structure-validator.js';
import { makeOpt } from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';
export const isIndustryInfo = structureValidator({
    date: makeOpt(isAtolDate),
    fois: makeOpt(isString),
    number: makeOpt(isString),
    industryAttribute: makeOpt(isString),
});
