import AtolRpcBase from './atol-rpc-base.js';
import {isJsonTaskType, JsonTaskType} from './types/json-task-type.js';
import {
	type JsonTaskDriver,
	type JsonTaskMap,
	type JsonTaskParam,
	jsonTaskTypeGuards
} from './types/json-task.js';
import type {Settings} from './types/settings.js';

class AtolRpc extends AtolRpcBase {
	constructor(settings?: Settings) {
		super(settings);

		const processJsonTask = this.processJsonTask.bind(this);

		return new Proxy(this, {
			get(target, prop, receiver) {
				if (prop in target) {
					const value = Reflect.get(target, prop, receiver);
					if (typeof value === 'function') {
						return value.bind(target);
					}

					return value;
				}

				if (isJsonTaskType(prop)) {
					const taskType: JsonTaskType = prop;

					return async <T extends keyof JsonTaskMap = typeof taskType>(p?: JsonTaskParam<T>) => {
						return processJsonTask((p ? {...p, type: taskType} : {type: taskType}) as JsonTaskMap[T]);
					}
				}

				throw new Error(`Unknown property ${String(prop)}`);
			},
			has(target, prop): boolean {
				return prop in target || prop in jsonTaskTypeGuards;
			},
			ownKeys(target) {
				const baseKeys = Reflect.ownKeys(target);
				const taskKeys = Object.keys(jsonTaskTypeGuards);
				return [...(new Set([...baseKeys, ...taskKeys]))];
			},
			getOwnPropertyDescriptor(target, prop): PropertyDescriptor | undefined {
				if (prop in target) {
					return Object.getOwnPropertyDescriptor(target, prop);
				}

				if (prop in jsonTaskTypeGuards) {
					return {
						configurable: true,
						enumerable: true,
						value: undefined,
						writable: false,
					};
				}

				return undefined;
			}
		}) as unknown as JsonTaskDriver & AtolRpcBase;
	}
}

interface AtolRpc extends AtolRpcBase, JsonTaskDriver {}
export default AtolRpc;
