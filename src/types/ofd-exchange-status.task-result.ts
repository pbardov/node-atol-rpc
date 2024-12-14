import {
	isOfdExchangeErrors,
	isOfdExchangeStatus, isOfdExchangeWarnings,
	type OfdExchangeErrors,
	type OfdExchangeStatus,
	type OfdExchangeWarnings,
} from './ofd-exchange.js';
import structureValidator from '../common/types/structure-validator.js';

export type OfdExchangeStatusTaskResult = {
	status: OfdExchangeStatus;
	errors: OfdExchangeErrors;
	warnings: OfdExchangeWarnings;
};

export const isOfdExchangeStatusTaskResult = structureValidator<OfdExchangeStatusTaskResult>({
	status: isOfdExchangeStatus,
	errors: isOfdExchangeErrors,
	warnings: isOfdExchangeWarnings,
});
