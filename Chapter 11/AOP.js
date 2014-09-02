var GoldTransfer = (function () {
    function GoldTransfer() {
    }
    GoldTransfer.prototype.SendPaymentOfGold = function (amountOfGold, destination) {
        var user = Security.GetCurrentUser();
        if (Security.IsAuthorized(user, "SendPaymentOfGold")) {
            //send actual payment
        } else {
            return { success: 0, message: "Unauthorized" };
        }
    };
    return GoldTransfer;
})();

var Security = (function () {
    function Security() {
    }
    Security.IsAuthorized = function (user, functionPoint) {
    };
    Security.GetCurrentUser = function () {
    };
    return Security;
})();
