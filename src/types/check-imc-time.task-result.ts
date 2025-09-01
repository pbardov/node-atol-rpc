import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';

export type CheckImcTimeTaskResult = {
    fmCheckTime: number;
    sendingTime: number;
    serverExchangeTime: number;
    fullTime: number;
};

export const isCheckImcTimeTaskResult = structureValidator<CheckImcTimeTaskResult>({
    fmCheckTime: isNumber,
    sendingTime: isNumber,
    serverExchangeTime: isNumber,
    fullTime: isNumber,
});
