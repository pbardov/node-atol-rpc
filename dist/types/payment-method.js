export var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["fullPrepayment"] = "fullPrepayment";
    PaymentMethod["prepayment"] = "prepayment";
    PaymentMethod["advance"] = "advance";
    PaymentMethod["fullPayment"] = "fullPayment";
    PaymentMethod["partialPayment"] = "partialPayment";
    PaymentMethod["credit"] = "credit";
    PaymentMethod["creditPayment"] = "creditPayment";
})(PaymentMethod || (PaymentMethod = {}));
export function isPaymentMethod(v) {
    return Object.values(PaymentMethod).includes(v);
}
