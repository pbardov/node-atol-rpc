import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
export const isUserAttribute = structureValidator({
    name: isString,
    value: isString,
});
