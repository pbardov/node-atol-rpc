import { DocumentItemType } from './document-item-type.js';
import { isBarcodeType } from './barcode-type.js';
import { isTextAlignment } from './text-alignment.js';
import { isDocumentItemText } from './document-item.text.js';
import isString from '../common/types/is-string.js';
import { makeOpt } from '../common/types/is-opt.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';
import { arrayTypeGuard } from '../common/types/is-array-of.js';
import structureValidator from '../common/types/structure-validator.js';
export const isDocumentItemBarcode = structureValidator({
    type: (v) => v === DocumentItemType.barcode,
    barcode: isString,
    barcodeType: isBarcodeType,
    alignment: makeOpt(isTextAlignment),
    scale: makeOpt(isNumber),
    height: makeOpt(isNumber),
    printText: makeOpt(isBoolean),
    overlay: makeOpt(arrayTypeGuard(isDocumentItemText)),
    storeInJournal: makeOpt(isBoolean),
});
