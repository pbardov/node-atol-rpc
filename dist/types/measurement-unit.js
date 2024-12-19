export var MeasurementUnit;
(function (MeasurementUnit) {
    MeasurementUnit[MeasurementUnit["piece"] = 0] = "piece";
    MeasurementUnit[MeasurementUnit["gram"] = 10] = "gram";
    MeasurementUnit[MeasurementUnit["kilogram"] = 11] = "kilogram";
    MeasurementUnit[MeasurementUnit["ton"] = 12] = "ton";
    MeasurementUnit[MeasurementUnit["centimeter"] = 20] = "centimeter";
    MeasurementUnit[MeasurementUnit["decimeter"] = 21] = "decimeter";
    MeasurementUnit[MeasurementUnit["meter"] = 22] = "meter";
    MeasurementUnit[MeasurementUnit["squareCentimeter"] = 30] = "squareCentimeter";
    MeasurementUnit[MeasurementUnit["squareDecimeter"] = 31] = "squareDecimeter";
    MeasurementUnit[MeasurementUnit["squareMeter"] = 32] = "squareMeter";
    MeasurementUnit[MeasurementUnit["milliliter"] = 40] = "milliliter";
    MeasurementUnit[MeasurementUnit["liter"] = 41] = "liter";
    MeasurementUnit[MeasurementUnit["cubicMeter"] = 42] = "cubicMeter";
    MeasurementUnit[MeasurementUnit["kilowattHour"] = 50] = "kilowattHour";
    MeasurementUnit[MeasurementUnit["gkal"] = 51] = "gkal";
    MeasurementUnit[MeasurementUnit["day"] = 70] = "day";
    MeasurementUnit[MeasurementUnit["hour"] = 71] = "hour";
    MeasurementUnit[MeasurementUnit["minute"] = 72] = "minute";
    MeasurementUnit[MeasurementUnit["second"] = 73] = "second";
    MeasurementUnit[MeasurementUnit["kilobyte"] = 80] = "kilobyte";
    MeasurementUnit[MeasurementUnit["megabyte"] = 81] = "megabyte";
    MeasurementUnit[MeasurementUnit["gigabyte"] = 82] = "gigabyte";
    MeasurementUnit[MeasurementUnit["terabyte"] = 83] = "terabyte";
    MeasurementUnit[MeasurementUnit["otherUnits"] = 255] = "otherUnits";
})(MeasurementUnit || (MeasurementUnit = {}));
export function isMeasurementUnit(v) {
    return Object.values(MeasurementUnit).includes(v);
}
