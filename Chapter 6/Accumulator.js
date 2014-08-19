var Westros;
(function (Westros) {
    (function (Taxation) {
        var TaxCollector = (function () {
            function TaxCollector() {
            }
            TaxCollector.prototype.collect = function (items, value, projection) {
                if (items.length > 1)
                    return projection(items[0]) + this.collect(items.slice(1), value, projection);
                return projection(items[0]);
            };
            return TaxCollector;
        })();
        Taxation.TaxCollector = TaxCollector;
    })(Westros.Taxation || (Westros.Taxation = {}));
    var Taxation = Westros.Taxation;
})(Westros || (Westros = {}));

var peasants = [{ name: "Jory Cassel", moneyOwed: 11, bankBalance: 50 }, { name: "Vardis Egen", moneyOwed: 15, bankBalance: 20 }];
var collector = new Westros.Taxation.TaxCollector();
console.log(collector.collect(peasants, 0, function (item) {
    return Math.min(item.moneyOwed, item.bankBalance);
}));

var multiArray = [[1, 2, 3], ["a", "b", "c"]];
for (var i = 0; i < multiArray.length; i++)
    for (var j = 0; j < multiArray[i].length; j++)
        console.log(multiArray[i][j]);
