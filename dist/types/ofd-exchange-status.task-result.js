import { isOfdExchangeErrors, isOfdExchangeStatus, isOfdExchangeWarnings, } from './ofd-exchange.js';
import structureValidator from '../common/types/structure-validator.js';
export const isOfdExchangeStatusTaskResult = structureValidator({
    status: isOfdExchangeStatus,
    errors: isOfdExchangeErrors,
    warnings: isOfdExchangeWarnings,
});
