import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetDepartmentSumTask = JsonTask & {
    type: JsonTaskType.getDepartmentSum;
};
export declare const isGetDepartmentSumTask: import("../common/types/type-guard.js").TypeGuardDetail<GetDepartmentSumTask>;
//# sourceMappingURL=get-department-sum.task.d.ts.map