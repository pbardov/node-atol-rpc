import {JsonTaskType} from './json-task-type.js';
import {type ImcParamsValidation, isImcParamsValidation} from './imc-params.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import {makeOpt} from '../common/types/is-opt.js';
import isNumber from '../common/types/is-number.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import type {JsonTask} from './json-task.js';

export type ValidateMarksTask = JsonTask & {
    type: JsonTaskType.validateMarks;
    timeout?: number;
    params: ImcParamsValidation[];
};

export const isValidateMarksTask = structureValidator<ValidateMarksTask>({
    type: isEqual(JsonTaskType.validateMarks),
    timeout: makeOpt(isNumber),
    params: arrayTypeGuard(isImcParamsValidation),
});
