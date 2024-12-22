import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetFnStatusTask = JsonTask & {
    type: JsonTaskType.getFnStatus;
};
export declare const isGetFnStatusTask: import("../common/types/type-guard.js").TypeGuardDetail<GetFnStatusTask>;
//# sourceMappingURL=get-fn-status.task.d.ts.map