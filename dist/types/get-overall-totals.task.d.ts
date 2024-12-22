import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetOverallTotalsTask = JsonTask & {
    type: JsonTaskType.getOverallTotals;
};
export declare const isGetOverallTotalsTask: import("../common/types/type-guard.js").TypeGuardDetail<GetOverallTotalsTask>;
//# sourceMappingURL=get-overall-totals.task.d.ts.map