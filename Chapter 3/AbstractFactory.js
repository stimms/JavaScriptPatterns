var Westros;
(function (Westros) {
    (function (Ruling) {
        (function (Lannister) {
            var KingJoffery = (function () {
                function KingJoffery() {
                }
                KingJoffery.prototype.makeDecision = function () {
                };
                KingJoffery.prototype.marry = function () {
                };
                return KingJoffery;
            })();
            Lannister.KingJoffery = KingJoffery;

            var LordTywin = (function () {
                function LordTywin() {
                }
                LordTywin.prototype.makeDecision = function () {
                };
                return LordTywin;
            })();
            Lannister.LordTywin = LordTywin;

            var LannisterFactory = (function () {
                function LannisterFactory() {
                }
                LannisterFactory.prototype.getKing = function () {
                    return new KingJoffery();
                };
                LannisterFactory.prototype.getHandOfTheKing = function () {
                    return new LordTywin();
                };
                return LannisterFactory;
            })();
            Lannister.LannisterFactory = LannisterFactory;
        })(Ruling.Lannister || (Ruling.Lannister = {}));
        var Lannister = Ruling.Lannister;
    })(Westros.Ruling || (Westros.Ruling = {}));
    var Ruling = Westros.Ruling;
})(Westros || (Westros = {}));

var Westros;
(function (Westros) {
    (function (Ruling) {
        (function (Targaryen) {
            var KingAerys = (function () {
                function KingAerys() {
                }
                KingAerys.prototype.makeDecision = function () {
                };
                KingAerys.prototype.marry = function () {
                };
                return KingAerys;
            })();
            Targaryen.KingAerys = KingAerys;

            var LordConnington = (function () {
                function LordConnington() {
                }
                LordConnington.prototype.makeDecision = function () {
                };
                return LordConnington;
            })();
            Targaryen.LordConnington = LordConnington;

            var TargaryenFactory = (function () {
                function TargaryenFactory() {
                }
                TargaryenFactory.prototype.getKing = function () {
                    return new KingAerys();
                };
                TargaryenFactory.prototype.getHandOfTheKing = function () {
                    return new LordConnington();
                };
                return TargaryenFactory;
            })();
            Targaryen.TargaryenFactory = TargaryenFactory;
        })(Ruling.Targaryen || (Ruling.Targaryen = {}));
        var Targaryen = Ruling.Targaryen;
    })(Westros.Ruling || (Westros.Ruling = {}));
    var Ruling = Westros.Ruling;
})(Westros || (Westros = {}));
