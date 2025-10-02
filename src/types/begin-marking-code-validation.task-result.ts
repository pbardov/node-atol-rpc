import structureValidator from '../common/types/structure-validator.js';
import isBoolean from '../common/types/is-boolean.js';
import isString from '../common/types/is-string.js';

export type OfflineValidationResult = {
    fmCheck: boolean;
    fmCheckResult: boolean;
    fmCheckErrorReason: string;
};

export const isOfflineValidationResult = structureValidator<OfflineValidationResult>({
    fmCheck: isBoolean,
    fmCheckResult: isBoolean,
    fmCheckErrorReason: isString
})

export type BeginMarkingCodeValidationTaskResult = {
    offlineValidation: OfflineValidationResult;
};

export const isBeginMarkingCodeValidationTaskResult = structureValidator<BeginMarkingCodeValidationTaskResult>({
    offlineValidation: isOfflineValidationResult,
});
