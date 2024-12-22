import { type TypeGuardDetail, type ValidationErrors } from '../common/types/type-guard.js';
import { DocumentItemType } from './document-item-type.js';
import { type DocumentItemText } from './document-item.text.js';
import { type DocumentItemBarcode } from './document-item.barcode.js';
import { type DocumentItemPixels } from './document-item.pixels.js';
import { type DocumentItemPictureFromMemory } from './document-item.picture-from-memory.js';
import { type DocumentItemUserAttribute } from './document-item.user-attribute.js';
import { type DocumentItemAdditionalAttribute } from './document-item.additional-attribute.js';
import { type DocumentItemPosition } from './document-item.position.js';
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
export declare function isDocumentItem(v: unknown, error?: ValidationErrors): v is DocumentItem;
export declare function makeDocumentItemTypeGuard<I extends DocumentItemType>(...types: I[]): TypeGuardDetail<DocumentItemTypeMap[I]>;
export type DocumentPrintItem = DocumentItemText | DocumentItemBarcode | DocumentItemPictureFromMemory | DocumentItemPixels;
export declare const isDocumentPrintItem: TypeGuardDetail<DocumentPrintItem>;
export {};
//# sourceMappingURL=document-item.d.ts.map