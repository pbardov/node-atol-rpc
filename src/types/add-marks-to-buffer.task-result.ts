import {
    type DriverError,
    type ImcCheckResult,
    isDriverError, isImcCheckResult
} from './get-marking-code-validation-status.task-result.js';
import {isOfflineValidationResult, type OfflineValidationResult} from './begin-marking-code-validation.task-result.js';
import structureValidator from '../common/types/structure-validator.js';

export type AddMarksToBufferTaskResult = {
    driverError: DriverError;
    offlineValidation: OfflineValidationResult;
    itemInfoCheckResult: ImcCheckResult;
};

export const isAddMarksToBufferTaskResult = structureValidator<AddMarksToBufferTaskResult>({
    driverError: isDriverError,
    offlineValidation: isOfflineValidationResult,
    itemInfoCheckResult: isImcCheckResult,
});
