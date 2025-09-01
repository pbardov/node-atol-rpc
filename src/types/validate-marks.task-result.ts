import {
    type DriverError,
    type ImcCheckResult, isDriverError, isImcCheckResult, isOnlineValidationResult,
    type OnlineValidationResult
} from './get-marking-code-validation-status.task-result.js';
import {isOfflineValidationResult, type OfflineValidationResult} from './begin-marking-code-validation.task-result.js';
import structureValidator from '../common/types/structure-validator.js';

export type ValidateMarksTaskResult = {
    driverError: DriverError;
    offlineValidation: OfflineValidationResult;
    onlineValidation: OnlineValidationResult;
    itemInfoCheckResult: ImcCheckResult;
};

export const isValidateMarksTaskResult = structureValidator<ValidateMarksTaskResult>({
    driverError: isDriverError,
    offlineValidation: isOfflineValidationResult,
    onlineValidation: isOnlineValidationResult,
    itemInfoCheckResult: isImcCheckResult,
});
