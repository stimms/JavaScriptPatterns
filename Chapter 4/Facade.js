var Westros;
(function (Westros) {
    (function (Transportation) {
        var Fleet = (function () {
            function Fleet() {
            }
            Fleet.prototype.setDestination = function (destination) {
                //pass commands to a series of ships, admirals and whoever else needs it
            };

            Fleet.prototype.resupply = function () {
            };

            Fleet.prototype.attach = function (destination) {
                //attack a city
            };
            return Fleet;
        })();
        Transportation.Fleet = Fleet;

        var Ship = (function () {
            function Ship() {
            }
            Ship.prototype.TurnLeft = function () {
            };
            Ship.prototype.TurnRight = function () {
            };
            Ship.prototype.GoForward = function () {
            };
            return Ship;
        })();
        Transportation.Ship = Ship;

        var Admiral = (function () {
            function Admiral() {
            }
            return Admiral;
        })();
        Transportation.Admiral = Admiral;

        var SupplyCoordinator = (function () {
            function SupplyCoordinator() {
            }
            return SupplyCoordinator;
        })();
        Transportation.SupplyCoordinator = SupplyCoordinator;
    })(Westros.Transportation || (Westros.Transportation = {}));
    var Transportation = Westros.Transportation;
})(Westros || (Westros = {}));
