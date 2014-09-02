var sinon = require("sinon");

var ToSpyUpon = (function () {
    function ToSpyUpon() {
    }
    ToSpyUpon.prototype.AddNumbers = function (number1, number2) {
        throw new Exception("oops");
        return number1 + number2;
    };
    return ToSpyUpon;
})();

var thing = new ToSpyUpon();
var spy = sinon.spy(thing, "AddNumbers");
thing.AddNumbers(1, 2);
console.log(spy.called);
console.log(spy.args[0][1]);
console.dir(spy);
