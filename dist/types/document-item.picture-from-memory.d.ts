import { type DocumentItem } from './document-item.js';
import { DocumentItemType } from './document-item-type.js';
import { type TextAlignment } from './text-alignment.js';
export type DocumentItemPictureFromMemory = DocumentItem & {
    type: DocumentItemType.pictureFromMemory;
    pictureNumber: number;
    alignment?: TextAlignment;
};
export declare const isDocumentItemPictureFromMemory: import("../common/types/type-guard.js").TypeGuardDetail<DocumentItemPictureFromMemory>;
//# sourceMappingURL=document-item.picture-from-memory.d.ts.map