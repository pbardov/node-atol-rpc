import structureValidator from '../common/types/structure-validator.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
export var Agent;
(function (Agent) {
    Agent["bankPayingAgent"] = "bankPayingAgent";
    Agent["bankPayingSubagent"] = "bankPayingSubagent";
    Agent["payingAgent"] = "payingAgent";
    Agent["payingSubagent"] = "payingSubagent";
    Agent["attorney"] = "attorney";
    Agent["commissionAgent"] = "commissionAgent";
    Agent["another"] = "another";
})(Agent || (Agent = {}));
export function isAgent(v) {
    return Object.values(Agent).includes(v);
}
export const isAgentInfo = structureValidator({
    agents: arrayTypeGuard(isAgent),
    agentsPrint: makeOpt(isBoolean),
    agentDataPrint: makeOpt(isBoolean),
});
