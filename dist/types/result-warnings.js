import structureValidator from '../common/types/structure-validator.js';
import { makeOpt } from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';
export const isResultWarnings = structureValidator({
    notPrinted: makeOpt(isBoolean),
});
