var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Westeros;
(function (Westeros) {
    (function (Food) {
        var BasicBeer = (function () {
            function BasicBeer() {
            }
            BasicBeer.prototype.Create = function () {
                this.AddIngredients();
                this.Stir();
                this.Ferment();
                this.Test();
                if (this.TestingPassed()) {
                    this.Distribute();
                }
            };

            BasicBeer.prototype.AddIngredients = function () {
                throw "Add ingredients needs to be implemented";
            };

            BasicBeer.prototype.Stir = function () {
                //stir 15 times with a wooden spoon
            };

            BasicBeer.prototype.Ferment = function () {
                //let stand for 30 days
            };

            BasicBeer.prototype.Test = function () {
                //draw off a cup of beer and taste it
            };

            BasicBeer.prototype.TestingPassed = function () {
                throw "Conditions to pass a test must be implemented";
            };

            BasicBeer.prototype.Distribute = function () {
                //place beer in 50L casks
            };
            return BasicBeer;
        })();
        Food.BasicBeer = BasicBeer;

        var RaspberryBeer = (function (_super) {
            __extends(RaspberryBeer, _super);
            function RaspberryBeer() {
                _super.apply(this, arguments);
            }
            RaspberryBeer.prototype.AddIngredients = function () {
                //add ingredients, probably including raspberries
            };

            RaspberryBeer.prototype.TestingPassed = function () {
                //beer must be reddish and taste of raspberries
            };
            return RaspberryBeer;
        })(BasicBeer);
        Food.RaspberryBeer = RaspberryBeer;
    })(Westeros.Food || (Westeros.Food = {}));
    var Food = Westeros.Food;
})(Westeros || (Westeros = {}));
