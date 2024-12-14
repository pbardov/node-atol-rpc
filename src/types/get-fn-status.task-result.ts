import {type FnStatus, isFnStatus} from './fn-status.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetFnStatusTaskResult = {
	fnStatus: FnStatus;
};

export const isGetFnStatusTaskResult = structureValidator<GetFnStatusTaskResult>({
	fnStatus: isFnStatus,
});
