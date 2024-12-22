import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetFnInfoTask = JsonTask & {
    type: JsonTaskType.getFnInfo;
};
export declare const isGetFnInfoTask: import("../common/types/type-guard.js").TypeGuardDetail<GetFnInfoTask>;
//# sourceMappingURL=get-fn-info.task.d.ts.map