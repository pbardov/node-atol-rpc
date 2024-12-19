import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';
export const isOperationInfo = structureValidator({
    id: isNumber,
    dateTime: isString,
    data: isString,
});
