import {DocumentItemType, isDocumentItemType} from './document-item-type.js';
import {type DocumentItemText, isDocumentItemText} from './document-item.text.js';
import {type DocumentItemBarcode, isDocumentItemBarcode} from './document-item.barcode.js';
import {type DocumentItemPixels, isDocumentItemPixels} from './document-item.pixels.js';
import {type TypeGuardDetail, type ValidationErrors} from '../common/types/type-guard.js';
import {type DocumentItemPictureFromMemory, isDocumentItemPictureFromMemory} from './document-item.picture-from-memory.js';

export type DocumentItem = {
	type: DocumentItemType;
};

type DocumentItemTypeMap = {
	[DocumentItemType.additionalAttribute]: DocumentItem;
	[DocumentItemType.barcode]: DocumentItemBarcode;
	[DocumentItemType.pixels]: DocumentItemPixels;
	[DocumentItemType.position]: DocumentItem;
	[DocumentItemType.pictureFromMemory]: DocumentItemPictureFromMemory;
	[DocumentItemType.text]: DocumentItemText;
	[DocumentItemType.userAttribute]: DocumentItem;
};

const falseGuard: TypeGuardDetail<DocumentItem> = (v: unknown, errors: ValidationErrors = {}): v is DocumentItem => false;
const documentItemTypeGuardMap: Record<DocumentItemType, TypeGuardDetail<DocumentItemTypeMap[DocumentItemType]>> = {
	[DocumentItemType.additionalAttribute]: falseGuard,
	[DocumentItemType.barcode]: isDocumentItemBarcode,
	[DocumentItemType.pixels]: isDocumentItemPixels,
	[DocumentItemType.position]: falseGuard,
	[DocumentItemType.pictureFromMemory]: isDocumentItemPictureFromMemory,
	[DocumentItemType.text]: isDocumentItemText,
	[DocumentItemType.userAttribute]: falseGuard,
};

export function isDocumentItem(v: unknown, error: ValidationErrors = {}): v is DocumentItem {
	const mb = v as DocumentItem | undefined;
	return Boolean(mb)
		&& typeof mb === 'object'
		&& isDocumentItemType(mb.type)
		&& documentItemTypeGuardMap[mb.type](mb, error);
}
