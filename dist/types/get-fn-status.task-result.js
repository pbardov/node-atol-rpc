import { isFnStatus } from './fn-status.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetFnStatusTaskResult = structureValidator({
    fnStatus: isFnStatus,
});
