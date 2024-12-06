import {type AtolDate, isAtolDate} from './atol-date.js';
import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';

export type IndustryInfo = {
	date?: AtolDate;
	fois?: string;
	number?: string;
	industryAttribute?: string;
};
export const isIndustryInfo = structureValidator<IndustryInfo>({
	date: makeOpt(isAtolDate),
	fois: makeOpt(isString),
	number: makeOpt(isString),
	industryAttribute: makeOpt(isString),
});
