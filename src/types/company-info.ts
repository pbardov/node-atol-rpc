import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';

export type CompanyInfo = {
	email: string;
};

export const isCompanyInfo = structureValidator<CompanyInfo>({
	email: isString,
});
