import exp from 'node:constants';
import structureValidator from '../common/types/structure-validator.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export enum Agent {
	bankPayingAgent = 'bankPayingAgent',
	bankPayingSubagent = 'bankPayingSubagent',
	payingAgent = 'payingAgent',
	payingSubagent = 'payingSubagent',
	attorney = 'attorney',
	commissionAgent = 'commissionAgent',
	another = 'another',
}

export function isAgent(v: unknown): v is Agent {
	return Object.values(Agent).includes(v as Agent);
}

export type AgentInfo = {
	agents: Agent[];
	agentsPrint?: boolean;
	agentDataPrint?: boolean;
};

export const isAgentInfo = structureValidator<AgentInfo>({
	agents: arrayTypeGuard(isAgent),
	agentsPrint: makeOpt(isBoolean),
	agentDataPrint: makeOpt(isBoolean),
});
