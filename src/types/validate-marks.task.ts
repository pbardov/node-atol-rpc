import {JsonTaskType} from './json-task-type.js';
import {type ImcParams, isImcParams} from './imc-params.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import {makeOpt} from '../common/types/is-opt.js';
import isNumber from '../common/types/is-number.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type ValidateMarksTask = {
    type: JsonTaskType.validateMarks;
    timeout?: number;
    params: ImcParams[];
};

export const isValidateMarksTask = structureValidator<ValidateMarksTask>({
    type: isEqual(JsonTaskType.validateMarks),
    timeout: makeOpt(isNumber),
    params: arrayTypeGuard(isImcParams),
});
