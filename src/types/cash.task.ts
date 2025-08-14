import {isJsonTaskType, JsonTaskType} from './json-task-type.js';
import type {JsonTask} from './json-task.js';
import {isOperator, type Operator} from './operator.js';
import {type DocumentPrintItem, isDocumentPrintItem} from './document-item.js';
import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';
import isNumber from '../common/types/is-number.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';

export const cashTaskTypes = [JsonTaskType.cashIn, JsonTaskType.cashOut] as const;
export type CashTaskTypesTuple = typeof cashTaskTypes;
export type CashTaskType = CashTaskTypesTuple[number];

export type CashTask<T extends CashTaskType = CashTaskType> = JsonTask & {
    type: T;
    operator?: Operator;
    cashSum: number;
    preItems?: DocumentPrintItem[];
    postItems?: DocumentPrintItem[];
}

export type CashInTask = CashTask<JsonTaskType.cashIn>;
export type CashOutTask = CashTask<JsonTaskType.cashOut>;

export const cashTaskTypeGuard = <T extends CashTaskType>(types: T[]) => structureValidator<CashTask<T>>({
    type: (v: unknown): v is T => isJsonTaskType(v) && types.includes(v as T),
    operator: makeOpt(isOperator),
    cashSum: isNumber,
    preItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
    postItems: makeOpt(arrayTypeGuard(isDocumentPrintItem)),
});

export const isCashTask = cashTaskTypeGuard([JsonTaskType.cashIn, JsonTaskType.cashOut]);
export const isCashInTask = cashTaskTypeGuard([JsonTaskType.cashIn]);
export const isCashOutTask = cashTaskTypeGuard([JsonTaskType.cashOut]);
