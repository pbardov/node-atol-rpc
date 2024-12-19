import { DocumentItemType } from './document-item-type.js';
import { isTextAlignment } from './text-alignment.js';
import isNumber from '../common/types/is-number.js';
import { makeOpt } from '../common/types/is-opt.js';
import structureValidator from '../common/types/structure-validator.js';
export const isDocumentItemPictureFromMemory = structureValidator({
    type: (v) => v === DocumentItemType.pictureFromMemory,
    pictureNumber: isNumber,
    alignment: makeOpt(isTextAlignment),
});
