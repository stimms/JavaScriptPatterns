var Westeros;
(function (Westeros) {
    (function (Alliances) {
        var HouseStark = (function () {
            function HouseStark() {
                this.karstark = new Karstark(this);
                this.bolton = new Bolton(this);
                this.frey = new Frey(this);
                this.umber = new Umber(this);
            }
            HouseStark.prototype.routeMessage = function (message) {
            };
            return HouseStark;
        })();
        Alliances.HouseStark = HouseStark;

        var Karstark = (function () {
            function Karstark(greatLord) {
                this.greatLord = greatLord;
            }
            Karstark.prototype.receiveMessage = function (message) {
            };
            Karstark.prototype.sendMessage = function (message) {
                this.greatLord.routeMessage(message);
            };
            return Karstark;
        })();
        Alliances.Karstark = Karstark;

        var Bolton = (function () {
            function Bolton(greatLord) {
                this.greatLord = greatLord;
            }
            Bolton.prototype.receiveMessage = function (message) {
            };
            Bolton.prototype.sendMessage = function (message) {
                this.greatLord.routeMessage(message);
            };
            return Bolton;
        })();
        Alliances.Bolton = Bolton;

        var Frey = (function () {
            function Frey(greatLord) {
                this.greatLord = greatLord;
            }
            Frey.prototype.receiveMessage = function (message) {
            };
            Frey.prototype.sendMessage = function (message) {
                this.greatLord.routeMessage(message);
            };
            return Frey;
        })();
        Alliances.Frey = Frey;

        var Umber = (function () {
            function Umber(greatLord) {
                this.greatLord = greatLord;
            }
            Umber.prototype.receiveMessage = function (message) {
            };
            Umber.prototype.sendMessage = function (message) {
                this.greatLord.routeMessage(message);
            };
            return Umber;
        })();
        Alliances.Umber = Umber;
    })(Westeros.Alliances || (Westeros.Alliances = {}));
    var Alliances = Westeros.Alliances;
})(Westeros || (Westeros = {}));
