import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isString from '../common/types/is-string.js';

export type CodeDescription = {
    code: number;
    description: string;
};

export const isCodeDescription = structureValidator<CodeDescription>({
    code: isNumber,
    description: isString,
});
