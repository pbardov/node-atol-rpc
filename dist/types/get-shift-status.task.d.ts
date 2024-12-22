import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetShiftStatusTask = JsonTask & {
    type: JsonTaskType.getShiftStatus;
};
export declare const isGetShiftStatusTask: import("../common/types/type-guard.js").TypeGuardDetail<GetShiftStatusTask>;
//# sourceMappingURL=get-shift-status.task.d.ts.map