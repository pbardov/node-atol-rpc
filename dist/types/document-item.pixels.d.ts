import { type DocumentItem } from './document-item.js';
import { DocumentItemType } from './document-item-type.js';
import { type Base64String } from '../common/types/base64-string.js';
import { type TextAlignment } from './text-alignment.js';
export type DocumentItemPixels = DocumentItem & {
    type: DocumentItemType.pixels;
    pixels: Base64String;
    width: number;
    scale?: number;
    alignment?: TextAlignment;
};
export declare const isDocumentItemPixels: import("../common/types/type-guard.js").TypeGuardDetail<DocumentItemPixels>;
//# sourceMappingURL=document-item.pixels.d.ts.map