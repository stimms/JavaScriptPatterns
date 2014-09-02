var ToWeaveIn = (function () {
    function ToWeaveIn() {
    }
    ToWeaveIn.prototype.BeforeCall = function () {
        console.log("Before!");
    };
    ToWeaveIn.prototype.AfterCall = function () {
        console.log("After!");
    };
    return ToWeaveIn;
})();

var GoldTransfer = (function () {
    function GoldTransfer() {
    }
    GoldTransfer.prototype.SendPaymentOfGold = function (amountOfGold, destination) {
        /* @aspect(Security)*/
        //send actual payment
        console.log("Payment sent");
    };
    return GoldTransfer;
})();

function weave(toWeave, toWeaveIn, toWeaveInName) {
    for (var property in toWeave.prototype) {
        var stringRepresentation = toWeave.prototype[property].toString();

        console.log(stringRepresentation);
        if (stringRepresentation.indexOf("@aspect(" + toWeaveInName + ")") >= 0) {
            toWeave.prototype[property + "_wrapped"] = toWeave.prototype[property];
            toWeave.prototype[property] = function () {
                toWeaveIn.BeforeCall();
                toWeave.prototype[property + "_wrapped"]();
                toWeaveIn.AfterCall();
            };
        }
    }
}

weave(GoldTransfer, new ToWeaveIn(), "Security");
var transfer = new GoldTransfer();
transfer.SendPaymentOfGold(50, "Starks");
