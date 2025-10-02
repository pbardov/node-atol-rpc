import {
    type DriverError,
    type ImcCheckResult, isDriverError, isImcCheckResult, isOnlineValidationResult,
    type OnlineValidationResult
} from './get-marking-code-validation-status.task-result.js';
import {isOfflineValidationResult, type OfflineValidationResult} from './begin-marking-code-validation.task-result.js';
import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export type ValidateMarkResult = {
    driverError: DriverError;
    offlineValidation: OfflineValidationResult;
    onlineValidation: OnlineValidationResult;
    itemInfoCheckResult: ImcCheckResult;
    sentImcRequest?: boolean;
};

export const isValidateMarkResult = structureValidator<ValidateMarkResult>({
    driverError: isDriverError,
    offlineValidation: isOfflineValidationResult,
    onlineValidation: isOnlineValidationResult,
    itemInfoCheckResult: isImcCheckResult,
    sentImcRequest: makeOpt(isBoolean),
});

export type ValidateMarksTaskResult = ValidateMarkResult[];
export const isValidateMarksTaskResult = arrayTypeGuard(isValidateMarkResult);
