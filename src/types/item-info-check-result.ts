import structureValidator from '../common/types/structure-validator.js';
import isBoolean from '../common/types/is-boolean.js';

export type ItemInfoCheckResult = {
	imcCheckFlag: boolean;
	imcCheckResult: boolean;
	imcStatusInfo: boolean;
	imcEstimatedStatusCorrect: boolean;
	ecrStandAloneFlag: boolean;
};

export const isItemInfoCheckResult = structureValidator<ItemInfoCheckResult>({
	imcCheckFlag: isBoolean,
	imcCheckResult: isBoolean,
	imcStatusInfo: isBoolean,
	imcEstimatedStatusCorrect: isBoolean,
	ecrStandAloneFlag: isBoolean,
});
