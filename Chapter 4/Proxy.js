var Westeros;
(function (Westeros) {
    (function (Measurement) {
        var BarrelCalculator = (function () {
            function BarrelCalculator() {
            }
            BarrelCalculator.prototype.calculateNumberNeeded = function (volume) {
                return Math.ceil(volume / 157);
            };
            return BarrelCalculator;
        })();
        Measurement.BarrelCalculator = BarrelCalculator;

        var DragonBarrelCalculator = (function () {
            function DragonBarrelCalculator() {
            }
            DragonBarrelCalculator.prototype.calculateNumberNeeded = function (volume) {
                if (this._barrelCalculator == null)
                    this._barrelCalculator = new BarrelCalculator();
                return this._barrelCalculator.calculateNumberNeeded(volume * .77);
            };
            return DragonBarrelCalculator;
        })();
        Measurement.DragonBarrelCalculator = DragonBarrelCalculator;
    })(Westeros.Measurement || (Westeros.Measurement = {}));
    var Measurement = Westeros.Measurement;
})(Westeros || (Westeros = {}));
