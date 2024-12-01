import {type DocumentItem} from './document-item.js';
import {DocumentItemType} from './document-item-type.js';
import {type Base64String, isBase64String} from '../common/types/base64-string.js';
import {isTextAlignment, type TextAlignment} from './text-alignment.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';
import structureValidator from '../common/types/structure-validator.js';

export type DocumentItemPixels = DocumentItem & {
	type: DocumentItemType.pixels;
	pixels: Base64String;
	width: number;
	scale?: number;
	alignment?: TextAlignment;
};

export const isDocumentItemPixels = structureValidator<DocumentItemPixels>({
	type: (v: unknown): v is DocumentItemType.pixels => v === DocumentItemType.pixels,
	pixels: isBase64String,
	width: isNumber,
	scale: makeOpt(isNumber),
	alignment: makeOpt(isTextAlignment),
});

