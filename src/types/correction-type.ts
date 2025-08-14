import isEnumOf from '../common/types/is-enum-of.js';

export enum CorrectionType {
    self = 'self',
    instruction = 'instruction'
}

export const isCorrectionType = isEnumOf(CorrectionType);
