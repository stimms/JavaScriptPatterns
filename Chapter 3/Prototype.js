var Westros;
(function (Westros) {
    (function (Families) {
        var Lannister = (function () {
            function Lannister() {
            }
            Lannister.prototype.clone = function () {
                var clone = new Lannister();
                for (var attr in this) {
                    clone[attr] = this[attr];
                }
                return clone;
            };
            return Lannister;
        })();
        Families.Lannister = Lannister;
    })(Westros.Families || (Westros.Families = {}));
    var Families = Westros.Families;
})(Westros || (Westros = {}));

var jamie = new Westros.Families.Lannister();
jamie.swordSkills = 9;
jamie.charm = 6;
jamie.wealth = 10;

var tyrion = jamie.clone();
tyrion.charm = 10;

console.log(tyrion.wealth);
console.log(tyrion.swordSkills);
