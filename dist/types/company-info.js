import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
export const isCompanyInfo = structureValidator({
    email: isString,
});
