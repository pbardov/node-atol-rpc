import { DocumentItemType } from './document-item-type.js';
import { isBase64String } from '../common/types/base64-string.js';
import { isTextAlignment } from './text-alignment.js';
import isNumber from '../common/types/is-number.js';
import { makeOpt } from '../common/types/is-opt.js';
import structureValidator from '../common/types/structure-validator.js';
export const isDocumentItemPixels = structureValidator({
    type: (v) => v === DocumentItemType.pixels,
    pixels: isBase64String,
    width: isNumber,
    scale: makeOpt(isNumber),
    alignment: makeOpt(isTextAlignment),
});
