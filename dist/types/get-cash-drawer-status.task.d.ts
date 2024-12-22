import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetCashDrawerStatusTask = JsonTask & {
    type: JsonTaskType.getCashDrawerStatus;
};
export declare const isGetCashDrawerStatusTask: import("../common/types/type-guard.js").TypeGuardDetail<GetCashDrawerStatusTask>;
//# sourceMappingURL=get-cash-drawer-status.task.d.ts.map