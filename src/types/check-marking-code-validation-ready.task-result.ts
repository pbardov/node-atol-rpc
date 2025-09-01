import structureValidator from '../common/types/structure-validator.js';
import isBoolean from '../common/types/is-boolean.js';

export type CheckMarkingCodeValidationReadyTaskResult = {
    validationReady: boolean;
};

export const isCheckMarkingCodeValidationReadyTaskResult = structureValidator<CheckMarkingCodeValidationReadyTaskResult>({
    validationReady: isBoolean,
});
