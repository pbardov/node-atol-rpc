export var TextAlignment;
(function (TextAlignment) {
    TextAlignment["left"] = "left";
    TextAlignment["center"] = "center";
    TextAlignment["right"] = "right";
})(TextAlignment || (TextAlignment = {}));
export function isTextAlignment(v) {
    return Object.values(TextAlignment).includes(v);
}
