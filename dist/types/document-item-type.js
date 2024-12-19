export var DocumentItemType;
(function (DocumentItemType) {
    DocumentItemType["position"] = "position";
    DocumentItemType["text"] = "text";
    DocumentItemType["barcode"] = "barcode";
    DocumentItemType["userAttribute"] = "userAttribute";
    DocumentItemType["additionalAttribute"] = "additionalAttribute";
    DocumentItemType["pictureFromMemory"] = "pictureFromMemory";
    DocumentItemType["pixels"] = "pixels";
})(DocumentItemType || (DocumentItemType = {}));
export function isDocumentItemType(v) {
    return Object.values(DocumentItemType).includes(v);
}
