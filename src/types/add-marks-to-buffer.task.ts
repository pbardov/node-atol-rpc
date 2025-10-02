import {JsonTaskType} from './json-task-type.js';
import {type ImcParamsValidation, isImcParamsValidation} from './imc-params.js';
import structureValidator from '../common/types/structure-validator.js';
import isEqual from '../common/types/is-equal.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export type AddMarksToBufferTask = {
    type: JsonTaskType.addMarksToBuffer;
    params: ImcParamsValidation[];
};

export const isAddMarksToBufferTask = structureValidator<AddMarksToBufferTask>({
    type: isEqual(JsonTaskType.addMarksToBuffer),
    params: arrayTypeGuard(isImcParamsValidation),
});
