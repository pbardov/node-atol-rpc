import structureValidator from '../common/types/structure-validator.js';
import {makeOpt} from '../common/types/is-opt.js';
import isBoolean from '../common/types/is-boolean.js';

export type ResultWarnings = {
	notPrinted?: boolean;
};

export const isResultWarnings = structureValidator<ResultWarnings>({
	notPrinted: makeOpt(isBoolean),
});
