var Westros;
(function (Westros) {
    (function (Army) {
        var Knight = (function () {
            function Knight() {
                this._type = "Westros.Army.Knight";
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
                this._type = "Westros.Army.FootSoldier";
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
                this._type = "Westros.Army.Archer";
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
                this._type = "Westros.Army.Lord";
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
                    if (collection[i]._type == 'Westros.Army.Knight')
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
                if (memberOfArmy._type == "Westros.Army.Knight") {
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
    })(Westros.Army || (Westros.Army = {}));
    var Army = Westros.Army;
})(Westros || (Westros = {}));

var b = new Westros.Army.VisitorExample();
b.Execute();
