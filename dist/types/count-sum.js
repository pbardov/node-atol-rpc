import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
export const isCountSum = structureValidator({
    count: isNumber,
    sum: isNumber,
});
export const isSum = structureValidator({ sum: isNumber });
