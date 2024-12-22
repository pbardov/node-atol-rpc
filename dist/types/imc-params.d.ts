import { type Base64String } from '../common/types/base64-string.js';
import { type ItemInfoCheckResult } from './item-info-check-result.js';
import { type MeasurementUnit } from './measurement-unit.js';
export declare enum ImcType {
    imcUnrecognized = 0,
    imcShort = 1,
    imcFmVerifyCode88 = 2,
    imcVerifyCode44 = 3,
    imcFmVerifyCode44 = 4,
    imcVerifyCode4 = 5,
    auto = 255
}
export declare function isImcType(v: unknown): v is ImcType;
export declare enum ItemEstimatedStatus {
    itemPieceSold = 1,
    itemDryForSale = 2,
    itemPieceReturn = 3,
    itemDryReturn = 4,
    itemStatusUnchanged = 255
}
export declare function isItemEstimatedStatus(v: unknown): v is ItemEstimatedStatus;
export type ImcParams = {
    imcType: ImcType;
    imc: Base64String;
    itemEstimatedStatus: ItemEstimatedStatus;
    imcModeProcessing: number;
    itemFractionalAmount?: string;
    imcBarcode?: Base64String;
    itemInfoCheckResult?: ItemInfoCheckResult;
    itemQuantity?: number;
    itemUnits?: MeasurementUnit;
};
export declare const isImcParams: import("../common/types/type-guard.js").TypeGuardDetail<ImcParams>;
//# sourceMappingURL=imc-params.d.ts.map