var Westros;
(function (Westros) {
    (function (Food) {
        var SimpleIngredient = (function () {
            function SimpleIngredient(name, calories, ironContent, vitaminCContent) {
                this.name = name;
                this.calories = calories;
                this.ironContent = ironContent;
                this.vitaminCContent = vitaminCContent;
            }
            SimpleIngredient.prototype.GetName = function () {
                return this.name;
            };
            SimpleIngredient.prototype.GetCalories = function () {
                return this.calories;
            };
            SimpleIngredient.prototype.GetIronContent = function () {
                return this.ironContent;
            };
            SimpleIngredient.prototype.GetVitaminCContent = function () {
                return this.vitaminCContent;
            };
            return SimpleIngredient;
        })();
        Food.SimpleIngredient = SimpleIngredient;

        var CompoundIngredient = (function () {
            function CompoundIngredient(name) {
                this.name = name;
                this.ingredients = new Array();
            }
            CompoundIngredient.prototype.AddIngredient = function (ingredient) {
                this.ingredients.push(ingredient);
            };

            CompoundIngredient.prototype.GetName = function () {
                return this.name;
            };
            CompoundIngredient.prototype.GetCalories = function () {
                var total = 0;
                for (var i = 0; i < this.ingredients.length; i++) {
                    total += this.ingredients[i].GetCalories();
                }
                return total;
            };
            CompoundIngredient.prototype.GetIronContent = function () {
                var total = 0;
                for (var i = 0; i < this.ingredients.length; i++) {
                    total += this.ingredients[i].GetIronContent();
                }
                return total;
            };
            CompoundIngredient.prototype.GetVitaminCContent = function () {
                var total = 0;
                for (var i = 0; i < this.ingredients.length; i++) {
                    total += this.ingredients[i].GetVitaminCContent();
                }
                return total;
            };
            return CompoundIngredient;
        })();
        Food.CompoundIngredient = CompoundIngredient;
    })(Westros.Food || (Westros.Food = {}));
    var Food = Westros.Food;
})(Westros || (Westros = {}));
