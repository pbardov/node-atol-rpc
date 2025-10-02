import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isNumber from '../common/types/is-number.js';

export type IsmParams = {
    host: string;
    port: number;
};

export const isIsmParams = structureValidator<IsmParams>({
    host: isString,
    port: isNumber,
});
