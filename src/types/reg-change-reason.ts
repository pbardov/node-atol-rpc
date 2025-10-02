import isEnumOf from '../common/types/is-enum-of.js';

export enum RegChangeReason {
    ofdChange = 'ofdChange',
    attributesChange = 'attributesChange',
    settingsChange = 'settingsChange'
}

export const isRegChangeReason = isEnumOf(RegChangeReason);
