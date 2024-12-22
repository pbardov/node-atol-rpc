import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetDeviceStatusTask = JsonTask & {
    type: JsonTaskType.getDeviceStatus;
};
export declare const isGetDeviceStatusTask: import("../common/types/type-guard.js").TypeGuardDetail<GetDeviceStatusTask>;
//# sourceMappingURL=get-device-status.task.d.ts.map