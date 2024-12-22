import { type DocumentItem } from './document-item.js';
import { DocumentItemType } from './document-item-type.js';
import { type BarcodeType } from './barcode-type.js';
import { type TextAlignment } from './text-alignment.js';
import { type DocumentItemText } from './document-item.text.js';
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
export declare const isDocumentItemBarcode: import("../common/types/type-guard.js").TypeGuardDetail<DocumentItemBarcode>;
//# sourceMappingURL=document-item.barcode.d.ts.map