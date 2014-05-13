var Westros;
(function (Westros) {
    var Ruler = (function () {
        function Ruler() {
            this.house = new Westros.Houses.Targaryen();
        }
        return Ruler;
    })();
    Westros.Ruler = Ruler;
})(Westros || (Westros = {}));

var Westros;
(function (Westros) {
    (function (Houses) {
        var Targaryen = (function () {
            function Targaryen() {
            }
            return Targaryen;
        })();
        Houses.Targaryen = Targaryen;
    })(Westros.Houses || (Westros.Houses = {}));
    var Houses = Westros.Houses;
})(Westros || (Westros = {}));
