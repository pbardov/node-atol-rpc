import { type OfdExchangeErrors, type OfdExchangeStatus, type OfdExchangeWarnings } from './ofd-exchange.js';
export type OfdExchangeStatusTaskResult = {
    status: OfdExchangeStatus;
    errors: OfdExchangeErrors;
    warnings: OfdExchangeWarnings;
};
export declare const isOfdExchangeStatusTaskResult: import("../common/types/type-guard.js").TypeGuardDetail<OfdExchangeStatusTaskResult>;
//# sourceMappingURL=ofd-exchange-status.task-result.d.ts.map