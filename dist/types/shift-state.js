export var ShiftState;
(function (ShiftState) {
    ShiftState["closed"] = "closed";
    ShiftState["opened"] = "opened";
    ShiftState["expired"] = "expired";
})(ShiftState || (ShiftState = {}));
export function isShiftState(v) {
    return Object.values(ShiftState).includes(v);
}
