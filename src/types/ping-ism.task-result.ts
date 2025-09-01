import structureValidator from '../common/types/structure-validator.js';
import isBoolean from '../common/types/is-boolean.js';
import isNumber from '../common/types/is-number.js';

export type PingIsmTaskResult = {
    ready: boolean;
    time: number;
};

export const isPingIsmTaskResult = structureValidator<PingIsmTaskResult>({
    ready: isBoolean,
    time: isNumber,
});
