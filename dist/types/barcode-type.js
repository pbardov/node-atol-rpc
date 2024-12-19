export var BarcodeType;
(function (BarcodeType) {
    BarcodeType["EAN8"] = "EAN8";
    BarcodeType["EAN13"] = "EAN13";
    BarcodeType["UPCA"] = "UPCA";
    BarcodeType["UPCE"] = "UPCE";
    BarcodeType["CODE39"] = "CODE39";
    BarcodeType["CODE93"] = "CODE93";
    BarcodeType["CODE128"] = "CODE128";
    BarcodeType["CODABAR"] = "CODABAR";
    BarcodeType["ITF"] = "ITF";
    BarcodeType["ITF14"] = "ITF14";
    BarcodeType["GS1_128"] = "GS1_128";
    BarcodeType["PDF417"] = "PDF417";
    BarcodeType["QR"] = "QR";
    BarcodeType["CODE39_EXTENDED"] = "CODE39_EXTENDED";
})(BarcodeType || (BarcodeType = {}));
export function isBarcodeType(v) {
    return Object.values(BarcodeType).includes(v);
}
