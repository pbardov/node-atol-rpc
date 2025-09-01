import {type ImcCheckResult, isImcCheckResult} from './get-marking-code-validation-status.task-result.js';
import structureValidator from '../common/types/structure-validator.js';

export type AcceptMarkingCodeTaskResult = {
    itemInfoCheckResult: ImcCheckResult
};

export const isAcceptMarkingCodeTaskResult = structureValidator<AcceptMarkingCodeTaskResult>({
    itemInfoCheckResult: isImcCheckResult,
});
