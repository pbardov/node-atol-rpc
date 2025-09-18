import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';

export type AdditionalAttribute = {
    name: string;
    value: string;
};

export const isAdditionalAttribute = structureValidator<AdditionalAttribute>({
    name: isString,
    value: isString,
});
