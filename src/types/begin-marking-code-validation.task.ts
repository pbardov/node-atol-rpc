import {JsonTaskType} from './json-task-type.js';
import {type ImcParamsValidation, imcParamsValidationValidator, isImcParamsValidation} from './imc-params.js';
import isEqual from '../common/types/is-equal.js';
import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export type MarkingCodeValidationParams = ImcParamsValidation & {
    notSendToServer?: boolean;
    notFormRequest?: boolean;
};

export const isMarkingCodeValidationParams = structureValidator<MarkingCodeValidationParams>({
    ...imcParamsValidationValidator,
    notSendToServer: makeOpt(isBoolean),
    notFormRequest: makeOpt(isBoolean),
});

export type BeginMarkingCodeValidationTask = {
    type: JsonTaskType.beginMarkingCodeValidation;
    params: MarkingCodeValidationParams;
};

export const isBeginMarkingCodeValidationTask = structureValidator<BeginMarkingCodeValidationTask>({
    type: isEqual(JsonTaskType.beginMarkingCodeValidation),
    params: isMarkingCodeValidationParams,
});
