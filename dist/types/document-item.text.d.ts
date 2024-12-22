import { type DocumentItem } from './document-item.js';
import { DocumentItemType } from './document-item-type.js';
import { type TextAlignment } from './text-alignment.js';
import { type TextWrap } from './text-wrap.js';
export type DocumentItemText = DocumentItem & {
    type: DocumentItemType.text;
    text: string;
    alignment?: TextAlignment;
    wrap?: TextWrap;
    font?: number;
    doubleWidth?: boolean;
    doubleHeight?: boolean;
    storeInJournal?: boolean;
};
export declare const isDocumentItemText: import("../common/types/type-guard.js").TypeGuardDetail<DocumentItemText>;
//# sourceMappingURL=document-item.text.d.ts.map