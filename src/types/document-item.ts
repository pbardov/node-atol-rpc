import {errorDescription, type TypeGuardDetail, type ValidationErrors} from '../common/types/type-guard.js';
import getTypeGuardDetails from '../common/types/get-type-guard-details.js';
import {DocumentItemType, isDocumentItemType} from './document-item-type.js';
import {type DocumentItemText, isDocumentItemText} from './document-item.text.js';
import {type DocumentItemBarcode, isDocumentItemBarcode} from './document-item.barcode.js';
import {type DocumentItemPixels, isDocumentItemPixels} from './document-item.pixels.js';
import {
	type DocumentItemPictureFromMemory,
	isDocumentItemPictureFromMemory,
} from './document-item.picture-from-memory.js';
import {type DocumentItemUserAttribute, isDocumentItemUserAttribute} from './document-item.user-attribute.js';
import {
	type DocumentItemAdditionalAttribute,
	isDocumentItemAdditionalAttribute,
} from './document-item.additional-attribute.js';
import {type DocumentItemPosition, isDocumentItemPosition} from './document-item.position.js';

export type DocumentItem = {
	type: DocumentItemType;
};

type DocumentItemTypeMap = {
	[DocumentItemType.additionalAttribute]: DocumentItemAdditionalAttribute;
	[DocumentItemType.barcode]: DocumentItemBarcode;
	[DocumentItemType.pixels]: DocumentItemPixels;
	[DocumentItemType.position]: DocumentItemPosition;
	[DocumentItemType.pictureFromMemory]: DocumentItemPictureFromMemory;
	[DocumentItemType.text]: DocumentItemText;
	[DocumentItemType.userAttribute]: DocumentItemUserAttribute;
};

const documentItemTypeGuardMap: Record<DocumentItemType, TypeGuardDetail<DocumentItemTypeMap[DocumentItemType]>> = {
	[DocumentItemType.additionalAttribute]: isDocumentItemAdditionalAttribute,
	[DocumentItemType.barcode]: isDocumentItemBarcode,
	[DocumentItemType.pixels]: isDocumentItemPixels,
	[DocumentItemType.position]: isDocumentItemPosition,
	[DocumentItemType.pictureFromMemory]: isDocumentItemPictureFromMemory,
	[DocumentItemType.text]: isDocumentItemText,
	[DocumentItemType.userAttribute]: isDocumentItemUserAttribute,
};

export function isDocumentItem(v: unknown, error: ValidationErrors = {}): v is DocumentItem {
	const mb = v as DocumentItem | undefined;
	if (!mb || typeof mb !== 'object') {
		error[errorDescription] = 'Value must be of object type';
		return false;
	}

	if (!isDocumentItemType(mb.type)) {
		error.type = getTypeGuardDetails(isDocumentItemType);
		return false;
	}

	return documentItemTypeGuardMap[mb.type](mb, error);
}

export function makeDocumentItemTypeGuard<I extends DocumentItemType>(...types: I[]): TypeGuardDetail<DocumentItemTypeMap[I]> {
	return (v: unknown, errors: ValidationErrors = {}): v is DocumentItemTypeMap[I] => {
		if (isDocumentItem(v, errors)) {
			if (!types.includes(v.type as I)) {
				errors.type = `Type must be one of ${types.join(', ')}`;
			} else {
				return true;
			}
		}

		return false;
	};
}

export type DocumentPrintItem = DocumentItemText | DocumentItemBarcode | DocumentItemPictureFromMemory | DocumentItemPixels;
export const isDocumentPrintItem: TypeGuardDetail<DocumentPrintItem>
	= makeDocumentItemTypeGuard(DocumentItemType.text, DocumentItemType.barcode, DocumentItemType.pictureFromMemory, DocumentItemType.pixels);
