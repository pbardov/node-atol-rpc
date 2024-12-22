import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetShiftTotalsTask = JsonTask & {
    type: JsonTaskType.getShiftTotals;
};
export declare const isGetShiftTotalsTask: import("../common/types/type-guard.js").TypeGuardDetail<GetShiftTotalsTask>;
//# sourceMappingURL=get-shift-totals.task.d.ts.map