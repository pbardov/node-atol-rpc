import {
    type DriverError,
    type ImcCheckResult,
    isDriverError, isImcCheckResult
} from './get-marking-code-validation-status.task-result.js';
import {isOfflineValidationResult, type OfflineValidationResult} from './begin-marking-code-validation.task-result.js';
import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type AddMarkToBufferResult = {
    driverError: DriverError;
    offlineValidation: OfflineValidationResult;
    itemInfoCheckResult: ImcCheckResult;
};

export const isAddMarkToBufferResult = structureValidator<AddMarkToBufferResult>({
    driverError: isDriverError,
    offlineValidation: isOfflineValidationResult,
    itemInfoCheckResult: isImcCheckResult,
});

export type AddMarksToBufferTaskResult = AddMarkToBufferResult[];
export const isAddMarksToBufferTaskResult = arrayTypeGuard(isAddMarkToBufferResult);
