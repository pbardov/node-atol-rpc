import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
export const isCustomParameter = structureValidator({
    id: isNumber,
    value: isString,
});
