var Westeros;
(function (Westeros) {
    (function (Court) {
        var GetterSetter = (function () {
            function GetterSetter() {
            }
            GetterSetter.prototype.GetProperty = function () {
                return this._property;
            };
            GetterSetter.prototype.SetProperty = function (value) {
                var temp = this._property;
                this._property = value;
                this._listener.Event(value, temp);
            };
            return GetterSetter;
        })();

        var Listener = (function () {
            function Listener() {
            }
            Listener.prototype.Event = function (newValue, oldValue) {
                //do something
            };
            return Listener;
        })();

        var Spy = (function () {
            function Spy() {
                this._partiesToNotify = [];
            }
            Spy.prototype.Subscribe = function (subscriber) {
                this._partiesToNotify.push(subscriber);
            };

            Spy.prototype.Unsubscribe = function (subscriber) {
                this._partiesToNotify.remove(subscriber);
            };

            Spy.prototype.SetPainKillers = function (painKillers) {
                this._painKillers = painKillers;
                for (var i = 0; i < this._partiesToNotify.length; i++) {
                    this._partiesToNotify[i](painKillers);
                }
            };
            return Spy;
        })();

        var Player = (function () {
            function Player() {
            }
            Player.prototype.OnKingPainKillerChange = function (newPainKillerAmount) {
                //perform some action
            };
            return Player;
        })();
    })(Westeros.Court || (Westeros.Court = {}));
    var Court = Westeros.Court;
})(Westeros || (Westeros = {}));
