export var TaxationType;
(function (TaxationType) {
    TaxationType["osn"] = "osn";
    TaxationType["usnIncome"] = "usnIncome";
    TaxationType["usnIncomeOutcome"] = "usnIncomeOutcome";
    TaxationType["esn"] = "esn";
    TaxationType["patent"] = "patent";
})(TaxationType || (TaxationType = {}));
export function isTaxationType(v) {
    return Object.values(TaxationType).includes(v);
}
