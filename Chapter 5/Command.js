var Westeros;
(function (Westeros) {
    (function (Communication) {
        var BringTroopsCommand = (function () {
            function BringTroopsCommand(location, numberOfTroops, when) {
                this._location = location;
                this._numberOfTroops = numberOfTroops;
                this._when = when;
            }
            BringTroopsCommand.prototype.Execute = function () {
                var receiver = new LordInstructions();
                receiver.BringTroops(this._location, this._numberOfTroops, this._when);
            };
            return BringTroopsCommand;
        })();
        Communication.BringTroopsCommand = BringTroopsCommand;

        var LordInstructions = (function () {
            function LordInstructions() {
            }
            LordInstructions.prototype.BringTroops = function (location, numberOfTroops, when) {
                console.log("You have been instructed to bring " + numberOfTroops + " troops to " + location + " by " + when);
            };
            return LordInstructions;
        })();
        Communication.LordInstructions = LordInstructions;

        var simpleCommand = new Array();
        simpleCommand.push(new LordInstructions().BringTroops);
        simpleCommand.push("King's Landing");
        simpleCommand.push(500);
        simpleCommand.push(new Date());

        simpleCommand[0](simpleCommand[1], simpleCommand[2], simpleCommand[3], simpleCommand[4], simpleCommand[5], simpleCommand[6]);
    })(Westeros.Communication || (Westeros.Communication = {}));
    var Communication = Westeros.Communication;
})(Westeros || (Westeros = {}));
