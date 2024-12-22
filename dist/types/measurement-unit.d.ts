export declare enum MeasurementUnit {
    piece = 0,
    gram = 10,
    kilogram = 11,
    ton = 12,
    centimeter = 20,
    decimeter = 21,
    meter = 22,
    squareCentimeter = 30,
    squareDecimeter = 31,
    squareMeter = 32,
    milliliter = 40,
    liter = 41,
    cubicMeter = 42,
    kilowattHour = 50,
    gkal = 51,
    day = 70,
    hour = 71,
    minute = 72,
    second = 73,
    kilobyte = 80,
    megabyte = 81,
    gigabyte = 82,
    terabyte = 83,
    otherUnits = 255
}
export declare function isMeasurementUnit(v: unknown): v is MeasurementUnit;
//# sourceMappingURL=measurement-unit.d.ts.map