var Westros;
(function (Westros) {
    (function (Army) {
        var Soldier = (function () {
            function Soldier() {
                this.Health = 10;
                this.FightingAbility = 5;
                this.Hunger = 0;
            }
            return Soldier;
        })();
        Army.Soldier = Soldier;
    })(Westros.Army || (Westros.Army = {}));
    var Army = Westros.Army;
})(Westros || (Westros = {}));
