import { errorDescription } from '../common/types/type-guard.js';
import getTypeGuardDetails from '../common/types/get-type-guard-details.js';
import { DocumentItemType, isDocumentItemType } from './document-item-type.js';
import { isDocumentItemText } from './document-item.text.js';
import { isDocumentItemBarcode } from './document-item.barcode.js';
import { isDocumentItemPixels } from './document-item.pixels.js';
import { isDocumentItemPictureFromMemory, } from './document-item.picture-from-memory.js';
import { isDocumentItemUserAttribute } from './document-item.user-attribute.js';
import { isDocumentItemAdditionalAttribute, } from './document-item.additional-attribute.js';
import { isDocumentItemPosition } from './document-item.position.js';
const documentItemTypeGuardMap = {
    [DocumentItemType.additionalAttribute]: isDocumentItemAdditionalAttribute,
    [DocumentItemType.barcode]: isDocumentItemBarcode,
    [DocumentItemType.pixels]: isDocumentItemPixels,
    [DocumentItemType.position]: isDocumentItemPosition,
    [DocumentItemType.pictureFromMemory]: isDocumentItemPictureFromMemory,
    [DocumentItemType.text]: isDocumentItemText,
    [DocumentItemType.userAttribute]: isDocumentItemUserAttribute,
};
export function isDocumentItem(v, error = {}) {
    const mb = v;
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
export function makeDocumentItemTypeGuard(...types) {
    return (v, errors = {}) => {
        if (isDocumentItem(v, errors)) {
            if (!types.includes(v.type)) {
                errors.type = `Type must be one of ${types.join(', ')}`;
            }
            else {
                return true;
            }
        }
        return false;
    };
}
export const isDocumentPrintItem = makeDocumentItemTypeGuard(DocumentItemType.text, DocumentItemType.barcode, DocumentItemType.pictureFromMemory, DocumentItemType.pixels);
