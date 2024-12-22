import { Fptr10 } from 'node-atol-wrapper';
import { type JsonTaskMap, type JsonTaskResultMap } from './types/json-task.js';
import { type Settings, WorkMode } from './types/settings.js';
export default class AtolRpcBase extends Fptr10 {
    workMode: WorkMode;
    constructor(settings?: Settings);
    processJsonTask<T extends keyof JsonTaskMap, R = JsonTaskResultMap[T]>(task: JsonTaskMap[T]): Promise<R>;
    processJsonP(json: unknown): Promise<any>;
}
//# sourceMappingURL=atol-rpc-base.d.ts.map