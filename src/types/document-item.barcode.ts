import {type DocumentItem} from './document-item.js';
import {DocumentItemType} from './document-item-type.js';
import {type BarcodeType, isBarcodeType} from './barcode-type.js';
import {isTextAlignment, type TextAlignment} from './text-alignment.js';
import {type DocumentItemText, isDocumentItemText} from './document-item.text.js';
import isString from '../common/types/is-string.js';
import {makeOpt} from '../common/types/is-opt.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';
import {arrayTypeGuard} from '../common/types/is-array-of.js';
import structureValidator from '../common/types/structure-validator.js';

export type DocumentItemBarcode = DocumentItem & {
	type: DocumentItemType.barcode;
	barcode: string;
	barcodeType: BarcodeType;
	alignment?: TextAlignment;
	scale?: number;
	height?: number;
	printText?: boolean;
	overlay?: DocumentItemText[];
	storeInJournal?: boolean;
};

export const isDocumentItemBarcode = structureValidator<DocumentItemBarcode>({
	type: (v: unknown): v is DocumentItemType.barcode => v === DocumentItemType.barcode,
	barcode: isString,
	barcodeType: isBarcodeType,
	alignment: makeOpt(isTextAlignment),
	scale: makeOpt(isNumber),
	height: makeOpt(isNumber),
	printText: makeOpt(isBoolean),
	overlay: makeOpt(arrayTypeGuard(isDocumentItemText)),
	storeInJournal: makeOpt(isBoolean),
});
