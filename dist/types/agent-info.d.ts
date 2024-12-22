export declare enum Agent {
    bankPayingAgent = "bankPayingAgent",
    bankPayingSubagent = "bankPayingSubagent",
    payingAgent = "payingAgent",
    payingSubagent = "payingSubagent",
    attorney = "attorney",
    commissionAgent = "commissionAgent",
    another = "another"
}
export declare function isAgent(v: unknown): v is Agent;
export type AgentInfo = {
    agents: Agent[];
    agentsPrint?: boolean;
    agentDataPrint?: boolean;
};
export declare const isAgentInfo: import("../common/types/type-guard.js").TypeGuardDetail<AgentInfo>;
//# sourceMappingURL=agent-info.d.ts.map