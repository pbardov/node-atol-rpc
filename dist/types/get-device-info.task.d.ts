import { type JsonTask } from './json-task.js';
import { JsonTaskType } from './json-task-type.js';
export type GetDeviceInfoTask = JsonTask & {
    type: JsonTaskType.getDeviceInfo;
};
export declare const isGetDeviceInfoTask: import("../common/types/type-guard.js").TypeGuardDetail<GetDeviceInfoTask>;
//# sourceMappingURL=get-device-info.task.d.ts.map