import { isBase64String } from '../common/types/base64-string.js';
import { isItemInfoCheckResult } from './item-info-check-result.js';
import { isMeasurementUnit } from './measurement-unit.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import { makeOpt } from '../common/types/is-opt.js';
import isString from '../common/types/is-string.js';
export var ImcType;
(function (ImcType) {
    ImcType[ImcType["imcUnrecognized"] = 0] = "imcUnrecognized";
    ImcType[ImcType["imcShort"] = 1] = "imcShort";
    ImcType[ImcType["imcFmVerifyCode88"] = 2] = "imcFmVerifyCode88";
    ImcType[ImcType["imcVerifyCode44"] = 3] = "imcVerifyCode44";
    ImcType[ImcType["imcFmVerifyCode44"] = 4] = "imcFmVerifyCode44";
    ImcType[ImcType["imcVerifyCode4"] = 5] = "imcVerifyCode4";
    ImcType[ImcType["auto"] = 255] = "auto";
})(ImcType || (ImcType = {}));
export function isImcType(v) {
    return Object.values(ImcType).includes(v);
}
export var ItemEstimatedStatus;
(function (ItemEstimatedStatus) {
    ItemEstimatedStatus[ItemEstimatedStatus["itemPieceSold"] = 1] = "itemPieceSold";
    ItemEstimatedStatus[ItemEstimatedStatus["itemDryForSale"] = 2] = "itemDryForSale";
    ItemEstimatedStatus[ItemEstimatedStatus["itemPieceReturn"] = 3] = "itemPieceReturn";
    ItemEstimatedStatus[ItemEstimatedStatus["itemDryReturn"] = 4] = "itemDryReturn";
    ItemEstimatedStatus[ItemEstimatedStatus["itemStatusUnchanged"] = 255] = "itemStatusUnchanged";
})(ItemEstimatedStatus || (ItemEstimatedStatus = {}));
export function isItemEstimatedStatus(v) {
    return Object.values(ItemEstimatedStatus).includes(v);
}
export const isImcParams = structureValidator({
    imcType: isImcType,
    imc: isBase64String,
    itemEstimatedStatus: isItemEstimatedStatus,
    imcModeProcessing: isNumber,
    itemFractionalAmount: makeOpt(isString),
    imcBarcode: makeOpt(isBase64String),
    itemInfoCheckResult: makeOpt(isItemInfoCheckResult),
    itemQuantity: makeOpt(isNumber),
    itemUnits: makeOpt(isMeasurementUnit),
});
