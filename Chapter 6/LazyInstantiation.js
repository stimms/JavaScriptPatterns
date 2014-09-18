var Westeros;
(function (Westeros) {
    (function (FoodSuppliers) {
        var Bakery = (function () {
            function Bakery() {
                this.requiredBreads = [];
            }
            Bakery.prototype.orderBreadType = function (breadType) {
                this.requiredBreads.push(breadType);
            };

            Bakery.prototype.pickUpBread = function (breadType) {
                console.log("Picup of bread " + breadType + " requested");
                if (!this.breads) {
                    this.createBreads();
                }
                for (var i = 0; i < this.breads.length; i++) {
                    if (this.breads[i].breadType == breadType)
                        return this.breads[i];
                }
            };

            Bakery.prototype.createBreads = function () {
                this.breads = [];
                for (var i = 0; i < this.requiredBreads.length; i++) {
                    this.breads.push(new Bread(this.requiredBreads[i]));
                }
            };
            return Bakery;
        })();
        FoodSuppliers.Bakery = Bakery;

        var Bread = (function () {
            function Bread(breadType) {
                this.breadType = breadType;
                //some complex, time consuming operation
                console.log("Bread " + breadType + " created.");
            }
            return Bread;
        })();
        FoodSuppliers.Bread = Bread;
    })(Westeros.FoodSuppliers || (Westeros.FoodSuppliers = {}));
    var FoodSuppliers = Westeros.FoodSuppliers;
})(Westeros || (Westeros = {}));

var bakery = new Westeros.FoodSuppliers.Bakery();
bakery.orderBreadType("Brioche");
bakery.orderBreadType("Anadama bread");
bakery.orderBreadType("Chapati");
bakery.orderBreadType("Focaccia");

console.log(bakery.pickUpBread("Brioche").breadType);
