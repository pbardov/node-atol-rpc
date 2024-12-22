import { type Operator } from './operator.js';
import { type DocumentPrintItem } from './document-item.js';
import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
import { type TypeGuardDetail } from '../common/types/type-guard.js';
declare const shiftTaskTypes: readonly [JsonTaskType.openShift, JsonTaskType.closeShift];
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
export declare const shiftTaskTypeGuard: <T extends ShiftTaskTypes>(types: T[]) => TypeGuardDetail<ShiftTask<T>>;
export declare const isShiftTask: TypeGuardDetail<ShiftTask<JsonTaskType.openShift | JsonTaskType.closeShift>>;
export declare const isOpenShiftTask: TypeGuardDetail<ShiftTask<JsonTaskType.openShift>>;
export declare const isCloseShiftTask: TypeGuardDetail<ShiftTask<JsonTaskType.closeShift>>;
export {};
//# sourceMappingURL=shift.task.d.ts.map