import {isOperator, type Operator} from './operator.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import {type DocumentPrintItem, isDocumentPrintItem} from './document-item.js';
import {type JsonTask} from './json-task.js';
import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import {type TypeGuardDetail} from '../common/types/type-guard.js';

const shiftTaskTypes = [JsonTaskType.openShift, JsonTaskType.closeShift] as const;
type ShiftTaskTypesTuple = typeof shiftTaskTypes;
export type ShiftTaskTypes = ShiftTaskTypesTuple[number];

export type ShiftTask<T extends ShiftTaskTypes = ShiftTaskTypes> = JsonTask & {
	type: T;
	operator?: Operator;
	preItems?: DocumentPrintItem[];
	postItems?: DocumentPrintItem[];
	electronically?: boolean;
};
export type OpenShiftTask = ShiftTask<JsonTaskType.openShift>;
export type CloseShiftTask = ShiftTask<JsonTaskType.closeShift>;

export const shiftTaskTypeGuard = <T extends ShiftTaskTypes>(types: T[]): TypeGuardDetail<ShiftTask<T>> => structureValidator<ShiftTask<T>>({
	type: (v: unknown): v is T => isJsonTaskType(v) && types.includes(v as T),
	operator: makeOpt(isOperator),
	preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
	postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
	electronically: makeOpt(isBoolean),
});

export const isShiftTask = shiftTaskTypeGuard([JsonTaskType.openShift, JsonTaskType.closeShift]);
export const isOpenShiftTask = shiftTaskTypeGuard([JsonTaskType.openShift]);
export const isCloseShiftTask = shiftTaskTypeGuard([JsonTaskType.closeShift]);
