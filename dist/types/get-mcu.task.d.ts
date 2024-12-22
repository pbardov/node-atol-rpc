import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetMcuTask = JsonTask & {
    type: JsonTaskType.getMcu;
};
export declare const isGetMcuTask: import("../common/types/type-guard.js").TypeGuardDetail<GetMcuTask>;
//# sourceMappingURL=get-mcu.task.d.ts.map