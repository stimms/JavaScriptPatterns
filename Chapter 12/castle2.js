var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Westeros;
(function (Westeros) {
    (function (Buildings) {
        var BaseStructure = (function () {
            function BaseStructure() {
                console.log("Structure built");
            }
            return BaseStructure;
        })();
        Buildings.BaseStructure = BaseStructure;

        var Castle = (function (_super) {
            __extends(Castle, _super);
            function Castle(name) {
                _super.call(this);
                this.name = name;
            }
            Castle.prototype.Build = function () {
                console.log("Castle built: " + this.name);
            };
            return Castle;
        })(BaseStructure);
        Buildings.Castle = Castle;
    })(Westeros.Buildings || (Westeros.Buildings = {}));
    var Buildings = Westeros.Buildings;
})(Westeros || (Westeros = {}));
