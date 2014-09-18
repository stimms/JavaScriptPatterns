var Westeros;
(function (Westeros) {
    (function (Foretelling) {
        var SquareCommand = (function () {
            function SquareCommand(numberToSquare) {
                this.numberToSquare = numberToSquare;
            }
            SquareCommand.prototype.Execute = function () {
                this.numberToSquare *= this.numberToSquare;
            };
            return SquareCommand;
        })();
        Foretelling.SquareCommand = SquareCommand;

        var WorldState = (function () {
            function WorldState(numberOfKings, currentKingInKingsLanding, season) {
                this.numberOfKings = numberOfKings;
                this.currentKingInKingsLanding = currentKingInKingsLanding;
                this.season = season;
            }
            return WorldState;
        })();
        Foretelling.WorldState = WorldState;

        var Soothsayer = (function () {
            function Soothsayer() {
                this.startingPoints = [];
                this.currentState = new WorldStateProvider();
            }
            Soothsayer.prototype.setInitialConditions = function (numberOfKings, currentKingInKingsLanding, season) {
                this.currentState.numberOfKings = numberOfKings;
                this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
                this.currentState.season = season;
            };
            Soothsayer.prototype.alterNumberOfKingsAndForetell = function (numberOfKings) {
                this.startingPoints.push(this.currentState.saveMemento());
                this.currentState.numberOfKings = numberOfKings;
            };
            Soothsayer.prototype.alterSeasonAndForetell = function (season) {
                this.startingPoints.push(this.currentState.saveMemento());
                this.currentState.season = season;
            };
            Soothsayer.prototype.alterCurrentKingInKingsLandingAndForetell = function (currentKingInKingsLanding) {
                this.startingPoints.push(this.currentState.saveMemento());
                this.currentState.currentKingInKingsLanding = currentKingInKingsLanding;
            };
            Soothsayer.prototype.tryADifferentChange = function () {
                this.currentState.restoreMemento(this.startingPoints.pop());
            };
            return Soothsayer;
        })();
        Foretelling.Soothsayer = Soothsayer;

        var WorldStateProvider = (function () {
            function WorldStateProvider() {
            }
            WorldStateProvider.prototype.saveMemento = function () {
                return new WorldState(this.numberOfKings, this.currentKingInKingsLanding, this.season);
            };
            WorldStateProvider.prototype.restoreMemento = function (memento) {
                this.numberOfKings = memento.numberOfKings;
                this.currentKingInKingsLanding = memento.currentKingInKingsLanding;
                this.season = memento.season;
            };
            return WorldStateProvider;
        })();
        Foretelling.WorldStateProvider = WorldStateProvider;
    })(Westeros.Foretelling || (Westeros.Foretelling = {}));
    var Foretelling = Westeros.Foretelling;
})(Westeros || (Westeros = {}));
