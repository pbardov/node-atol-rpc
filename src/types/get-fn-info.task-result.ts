import {type FnInfo, isFnInfo} from './fn-info.js';
import structureValidator from '../common/types/structure-validator.js';

export type GetFnInfoTaskResult = {
	fnInfo: FnInfo;
};

export const isGetFnInfoTaskResult = structureValidator<GetFnInfoTaskResult>({
	fnInfo: isFnInfo,
});
