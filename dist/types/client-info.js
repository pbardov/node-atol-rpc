import structureValidator from '../common/types/structure-validator.js';
import { makeOpt } from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';
export const isClientInfo = structureValidator({
    emailOrPhone: isString,
    vatin: makeOpt(isString),
    name: makeOpt(isString),
    birthDate: makeOpt(isString),
    citizenship: makeOpt(isString),
    identityDocumentCode: makeOpt(isString),
    identityDocumentData: makeOpt(isString),
    address: makeOpt(isString),
});
