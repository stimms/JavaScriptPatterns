var Westeros;
(function (Westeros) {
    (function (Transportation) {
        var SailConfiguration = (function () {
            function SailConfiguration() {
            }
            return SailConfiguration;
        })();
        Transportation.SailConfiguration = SailConfiguration;

        var Ship = (function () {
            function Ship() {
            }
            Ship.prototype.SetRudderAngleTo = function (angle) {
            };
            Ship.prototype.SetSailConfiguration = function (configuration) {
            };
            Ship.prototype.SetSailAngle = function (sailId, sailAngle) {
            };
            Ship.prototype.GetCurrentBearing = function () {
                return 7;
            };
            Ship.prototype.GetCurrentSpeedEstimate = function () {
                return 7;
            };
            Ship.prototype.ShiftCrewWeightTo = function (weightToShift, locationId) {
            };
            return Ship;
        })();
        Transportation.Ship = Ship;

        var ShipAdapter = (function () {
            function ShipAdapter() {
                this._ship = new Ship();
            }
            ShipAdapter.prototype.TurnLeft = function () {
                this._ship.SetRudderAngleTo(-30);
                this._ship.SetSailAngle(3, 12);
            };
            ShipAdapter.prototype.TurnRight = function () {
                this._ship.SetRudderAngleTo(30);
                this._ship.SetSailAngle(5, -9);
            };
            ShipAdapter.prototype.GoForward = function () {
                //do something else to the _ship
            };
            return ShipAdapter;
        })();
        Transportation.ShipAdapter = ShipAdapter;
    })(Westeros.Transportation || (Westeros.Transportation = {}));
    var Transportation = Westeros.Transportation;
})(Westeros || (Westeros = {}));

var ship = new Westeros.Transportation.ShipAdapter();
ship.GoForward();
ship.TurnLeft();
