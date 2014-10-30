var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Westeros;
(function (Westeros) {
    (function (Structures) {
        var BaseStructure = (function () {
            function BaseStructure() {
            }
            return BaseStructure;
        })();
        Structures.BaseStructure = BaseStructure;
        var Castle = (function (_super) {
            __extends(Castle, _super);
            function Castle(name) {
                this.name = name;
                _super.call(this);
            }
            Castle.prototype.Build = function () {
                console.log("Castle built: " + this.name);
            };
            return Castle;
        })(BaseStructure);
        Structures.Castle = Castle;
    })(Westeros.Structures || (Westeros.Structures = {}));
    var Structures = Westeros.Structures;
})(Westeros || (Westeros = {}));

var cc = new Westeros.Structures.Castle("Winterfell");
cc.Build();
cc.name = "ss";
