var Westros;
(function (Westros) {
    (function (Travel) {
        var TravelResult = (function () {
            function TravelResult(durationInDays, probabilityOfDeath, cost) {
                this.durationInDays = durationInDays;
                this.probabilityOfDeath = probabilityOfDeath;
                this.cost = cost;
            }
            return TravelResult;
        })();
        Travel.TravelResult = TravelResult;

        var SeaGoingVessel = (function () {
            function SeaGoingVessel() {
            }
            SeaGoingVessel.prototype.Travel = function (source, destination) {
                return new TravelResult(15, .25, 500);
            };
            return SeaGoingVessel;
        })();
        Travel.SeaGoingVessel = SeaGoingVessel;

        var Horse = (function () {
            function Horse() {
            }
            Horse.prototype.Travel = function (source, destination) {
                return new TravelResult(30, .25, 50);
            };
            return Horse;
        })();
        Travel.Horse = Horse;

        var Walk = (function () {
            function Walk() {
            }
            Walk.prototype.Travel = function (source, destination) {
                return new TravelResult(150, .55, 0);
            };
            return Walk;
        })();
        Travel.Walk = Walk;
    })(Westros.Travel || (Westros.Travel = {}));
    var Travel = Westros.Travel;
})(Westros || (Westros = {}));

var currentMoney = 70;
var strat;
if (currentMoney > 500)
    strat = new Westros.Travel.SeaGoingVessel();
else if (currentMoney > 50)
    strat = new Westros.Travel.Horse();
else
    strat = new Westros.Travel.Walk();
