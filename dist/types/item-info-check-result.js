import structureValidator from '../common/types/structure-validator.js';
import isBoolean from '../common/types/is-boolean.js';
export const isItemInfoCheckResult = structureValidator({
    imcCheckFlag: isBoolean,
    imcCheckResult: isBoolean,
    imcStatusInfo: isBoolean,
    imcEstimatedStatusCorrect: isBoolean,
    ecrStandAloneFlag: isBoolean,
});
