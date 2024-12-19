export var TextWrap;
(function (TextWrap) {
    TextWrap["none"] = "none";
    TextWrap["chars"] = "chars";
    TextWrap["words"] = "words";
})(TextWrap || (TextWrap = {}));
export function isTextWrap(v) {
    return Object.values(TextWrap).includes(v);
}
