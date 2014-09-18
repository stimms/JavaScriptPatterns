var Westeros;
(function (Westeros) {
    (function (Armor) {
        var BasicArmor = (function () {
            function BasicArmor() {
            }
            BasicArmor.prototype.CalculateDamageFromHit = function (hit) {
                return 1;
            };
            BasicArmor.prototype.GetArmorIntegrity = function () {
                return 1;
            };
            return BasicArmor;
        })();
        Armor.BasicArmor = BasicArmor;

        var ChainMail = (function () {
            function ChainMail(decoratedArmor) {
                this.decoratedArmor = decoratedArmor;
            }
            ChainMail.prototype.CalculateDamageFromHit = function (hit) {
                hit.Strength = hit.Strength * .8;
                return this.decoratedArmor.CalculateDamageFromHit(hit);
            };
            ChainMail.prototype.GetArmorIntegrity = function () {
                return .9 * this.decoratedArmor.GetArmorIntegrity();
            };
            return ChainMail;
        })();
        Armor.ChainMail = ChainMail;

        var Hit = (function () {
            function Hit() {
            }
            return Hit;
        })();
        Armor.Hit = Hit;
    })(Westeros.Armor || (Westeros.Armor = {}));
    var Armor = Westeros.Armor;
})(Westeros || (Westeros = {}));
