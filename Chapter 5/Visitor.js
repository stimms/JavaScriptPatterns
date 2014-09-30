var Westeros;
(function (Westeros) {
    (function (Army) {
        var Knight = (function () {
            function Knight() {
                this._type = "Westeros.Army.Knight";
            }
            Knight.prototype.printName = function () {
                console.log("Knight");
            };
            Knight.prototype.visit = function (visitor) {
                visitor.visit(this);
            };
            return Knight;
        })();
        Army.Knight = Knight;
        var FootSoldier = (function () {
            function FootSoldier() {
                this._type = "Westeros.Army.FootSoldier";
            }
            FootSoldier.prototype.printName = function () {
                console.log("FootSoldier");
            };
            FootSoldier.prototype.visit = function (visitor) {
                visitor.visit(this);
            };
            return FootSoldier;
        })();
        Army.FootSoldier = FootSoldier;
        var Archer = (function () {
            function Archer() {
                this._type = "Westeros.Army.Archer";
            }
            Archer.prototype.printName = function () {
                console.log("Archer");
            };
            Archer.prototype.visit = function (visitor) {
                visitor.visit(this);
            };
            return Archer;
        })();
        Army.Archer = Archer;
        var Lord = (function () {
            function Lord() {
                this._type = "Westeros.Army.Lord";
            }
            Lord.prototype.printName = function () {
                console.log("Lord");
            };
            Lord.prototype.visit = function (visitor) {
                visitor.visit(this);
            };
            return Lord;
        })();
        Army.Lord = Lord;

        var InstanceOfExample = (function () {
            function InstanceOfExample() {
            }
            InstanceOfExample.prototype.Execute = function () {
                var collection = [];
                collection.push(Object.create(Knight));
                collection.push(Object.create(FootSoldier));
                collection.push(new Lord());
                collection.push(new Archer());

                for (var i = 0; i < collection.length; i++) {
                    if (collection[i] instanceof Westeros.Army.Knight)
                        collection[i].printName();
                    else
                        console.log("No match");
                }
            };
            return InstanceOfExample;
        })();
        Army.InstanceOfExample = InstanceOfExample;

        var IfExample = (function () {
            function IfExample() {
            }
            IfExample.prototype.Execute = function () {
                var collection = [];
                collection.push(new Knight());
                collection.push(new FootSoldier());
                collection.push(new Lord());
                collection.push(new Archer());

                for (var i = 0; i < collection.length; i++) {
                    if (collection[i]._type == 'Westeros.Army.Knight')
                        collection[i].printName();
                    else
                        console.log("No match");
                }
            };
            return IfExample;
        })();
        Army.IfExample = IfExample;

        var VisitorExample = (function () {
            function VisitorExample() {
            }
            VisitorExample.prototype.Execute = function () {
                var collection = [];
                collection.push(new Knight());
                collection.push(new FootSoldier());
                collection.push(new Lord());
                collection.push(new Archer());
                var visitor = new SelectiveNamePrinterVisitor();
                for (var i = 0; i < collection.length; i++) {
                    collection[i].visit(visitor);
                }
            };
            return VisitorExample;
        })();
        Army.VisitorExample = VisitorExample;

        var SelectiveNamePrinterVisitor = (function () {
            function SelectiveNamePrinterVisitor() {
            }
            SelectiveNamePrinterVisitor.prototype.visit = function (memberOfArmy) {
                if (memberOfArmy instanceof Westeros.Army.Knight) {
                    this.VisitKnight(memberOfArmy);
                } else {
                    console.log("Not a knight");
                }
            };

            SelectiveNamePrinterVisitor.prototype.VisitKnight = function (memberOfArmy) {
                memberOfArmy.printName();
            };
            return SelectiveNamePrinterVisitor;
        })();
    })(Westeros.Army || (Westeros.Army = {}));
    var Army = Westeros.Army;
})(Westeros || (Westeros = {}));

console.log("Instance of");
var a = new Westeros.Army.InstanceOfExample();
a.Execute();
console.log("Type of");
var b = new Westeros.Army.IfExample();
b.Execute();
console.log("Internal type");
var c = new Westeros.Army.VisitorExample();
c.Execute();
