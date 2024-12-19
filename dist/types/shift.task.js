import { isOperator } from './operator.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import { isDocumentPrintItem } from './document-item.js';
import { isJsonTaskType, JsonTaskType } from './json-task-type.js';
const shiftTaskTypes = [JsonTaskType.openShift, JsonTaskType.closeShift];
export const shiftTaskTypeGuard = (types) => structureValidator({
    type: (v) => isJsonTaskType(v) && types.includes(v),
    operator: makeOpt(isOperator),
    preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    electronically: makeOpt(isBoolean),
});
export const isShiftTask = shiftTaskTypeGuard([JsonTaskType.openShift, JsonTaskType.closeShift]);
export const isOpenShiftTask = shiftTaskTypeGuard([JsonTaskType.openShift]);
export const isCloseShiftTask = shiftTaskTypeGuard([JsonTaskType.closeShift]);
