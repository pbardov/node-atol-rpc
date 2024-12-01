import {type DocumentItem} from './document-item.js';
import {DocumentItemType} from './document-item-type.js';
import {isTextAlignment, type TextAlignment} from './text-alignment.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import structureValidator from '../common/types/structure-validator.js';

export type DocumentItemPictureFromMemory = DocumentItem & {
	type: DocumentItemType.pictureFromMemory;
	pictureNumber: number;
	alignment?: TextAlignment;
};

export const isDocumentItemPictureFromMemory = structureValidator<DocumentItemPictureFromMemory>({
	type: (v: unknown): v is DocumentItemType.pictureFromMemory => v === DocumentItemType.pictureFromMemory,
	pictureNumber: isNumber,
	alignment: makeOpt(isTextAlignment),
});
