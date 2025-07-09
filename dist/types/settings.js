import isEnumOf from '../common/types/is-enum-of.js';
import structureValidator from '../common/types/structure-validator.js';
import { makeOpt } from '../common/types/is-opt.js';
import { isFptr10Settings, } from './fptr10-bindings.js';
export var WorkMode;
(function (WorkMode) {
    WorkMode["sync"] = "sync";
    WorkMode["async"] = "async";
})(WorkMode || (WorkMode = {}));
export const isWorkMode = isEnumOf(WorkMode);
export const isWithWorkMode = structureValidator({
    workMode: makeOpt(isWorkMode),
});
export const isSettings = (v, errors = {}) => isFptr10Settings(v, errors) && isWithWorkMode(v, errors);
