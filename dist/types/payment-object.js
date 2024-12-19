/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
export var PaymentObject;
(function (PaymentObject) {
    PaymentObject[PaymentObject["commodity"] = 1] = "commodity";
    PaymentObject[PaymentObject["excise"] = 2] = "excise";
    PaymentObject[PaymentObject["job"] = 3] = "job";
    PaymentObject[PaymentObject["service"] = 4] = "service";
    PaymentObject[PaymentObject["gamblingBet"] = 5] = "gamblingBet";
    PaymentObject[PaymentObject["gamblingPrize"] = 6] = "gamblingPrize";
    PaymentObject[PaymentObject["lottery"] = 7] = "lottery";
    PaymentObject[PaymentObject["lotteryPrize"] = 8] = "lotteryPrize";
    PaymentObject[PaymentObject["intellectualActivity"] = 9] = "intellectualActivity";
    PaymentObject[PaymentObject["payment"] = 10] = "payment";
    PaymentObject[PaymentObject["agentCommission"] = 11] = "agentCommission";
    PaymentObject[PaymentObject["composite"] = 12] = "composite";
    PaymentObject[PaymentObject["pay"] = 12] = "pay";
    PaymentObject[PaymentObject["another"] = 13] = "another";
    PaymentObject[PaymentObject["proprietaryLaw"] = 14] = "proprietaryLaw";
    PaymentObject[PaymentObject["nonOperatingIncome"] = 15] = "nonOperatingIncome";
    PaymentObject[PaymentObject["insuranceContributions"] = 16] = "insuranceContributions";
    PaymentObject[PaymentObject["otherContributions"] = 16] = "otherContributions";
    PaymentObject[PaymentObject["merchantTax"] = 17] = "merchantTax";
    PaymentObject[PaymentObject["resortFee"] = 18] = "resortFee";
    PaymentObject[PaymentObject["deposit"] = 19] = "deposit";
    PaymentObject[PaymentObject["consumption"] = 20] = "consumption";
    PaymentObject[PaymentObject["soleProprietorCPIContributions"] = 21] = "soleProprietorCPIContributions";
    PaymentObject[PaymentObject["cpiContributions"] = 22] = "cpiContributions";
    PaymentObject[PaymentObject["soleProprietorCMIContributions"] = 23] = "soleProprietorCMIContributions";
    PaymentObject[PaymentObject["cmiContributions"] = 24] = "cmiContributions";
    PaymentObject[PaymentObject["csiContributions"] = 25] = "csiContributions";
    PaymentObject[PaymentObject["casinoPayment"] = 26] = "casinoPayment";
    PaymentObject[PaymentObject["fundsIssuance"] = 27] = "fundsIssuance";
    PaymentObject[PaymentObject["exciseWithoutMarking"] = 30] = "exciseWithoutMarking";
    PaymentObject[PaymentObject["exciseWithMarking"] = 31] = "exciseWithMarking";
    PaymentObject[PaymentObject["commodityWithoutMarking"] = 32] = "commodityWithoutMarking";
    PaymentObject[PaymentObject["commodityWithMarking"] = 33] = "commodityWithMarking";
})(PaymentObject || (PaymentObject = {}));
export function isPaymentObject(v) {
    return Object.values(PaymentObject).includes(v);
}
