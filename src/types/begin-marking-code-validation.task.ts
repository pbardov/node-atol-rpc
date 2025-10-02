import {JsonTaskType} from './json-task-type.js';
import {type ImcParamsValidation, isImcParamsValidation} from './imc-params.js';
import isEqual from '../common/types/is-equal.js';
import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type BeginMarkingCodeValidationTask = {
    type: JsonTaskType.beginMarkingCodeValidation;
    params: ImcParamsValidation[];
};

export const isBeginMarkingCodeValidationTask = structureValidator<BeginMarkingCodeValidationTask>({
    type: isEqual(JsonTaskType.beginMarkingCodeValidation),
    params: arrayTypeGuard(isImcParamsValidation),
});
