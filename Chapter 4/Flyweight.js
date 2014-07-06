var Westros;
(function (Westros) {
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
    })(Westros.Army || (Westros.Army = {}));
    var Army = Westros.Army;
})(Westros || (Westros = {}));
