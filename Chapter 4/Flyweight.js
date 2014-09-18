var Westeros;
(function (Westeros) {
    (function (Army) {
        var Soldier = (function () {
            function Soldier() {
                            }
            Soldier.prototype.Health = 10;
            Soldier.prototype.FightingAbility = 5;
            Soldier.prototype.Hunger = 0;

            return Soldier;
        })();
        Army.Soldier = Soldier;
    })(Westeros.Army || (Westeros.Army = {}));
    var Army = Westeros.Army;
})(Westeros || (Westeros = {}));
