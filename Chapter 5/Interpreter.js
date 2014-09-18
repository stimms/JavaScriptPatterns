var Westeros;
(function (Westeros) {
    (function (History) {
        var Battle = (function () {
            function Battle(battleGround, agressor, defender, victor) {
                this.battleGround = battleGround;
                this.agressor = agressor;
                this.defender = defender;
                this.victor = victor;
            }
            return Battle;
        })();
        History.Battle = Battle;

        var Parser = (function () {
            function Parser(battleText) {
                this.battleText = battleText;
                this.currentIndex = 0;
                this.battleList = battleText.split("\n");
            }
            Parser.prototype.nextBattle = function () {
                if (!this.battleList[0])
                    return null;
                var segments = this.battleList[0].match(/\((.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->\s?(.+)/);
                return new Battle(segments[2], segments[1], segments[3], segments[4]);
            };
            return Parser;
        })();
        History.Parser = Parser;
    })(Westeros.History || (Westeros.History = {}));
    var History = Westeros.History;
})(Westeros || (Westeros = {}));
