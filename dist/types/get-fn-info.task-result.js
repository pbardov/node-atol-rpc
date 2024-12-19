import { isFnInfo } from './fn-info.js';
import structureValidator from '../common/types/structure-validator.js';
export const isGetFnInfoTaskResult = structureValidator({
    fnInfo: isFnInfo,
});
