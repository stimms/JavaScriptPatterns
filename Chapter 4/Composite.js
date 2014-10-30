var Westeros;
(function (Westeros) {
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
    })(Westeros.Food || (Westeros.Food = {}));
    var Food = Westeros.Food;
})(Westeros || (Westeros = {}));

var egg = new Westeros.Food.SimpleIngredient("Egg", 155, 6, 0);
var milk = new Westeros.Food.SimpleIngredient("Milk", 42, 0, 0);
var sugar = new Westeros.Food.SimpleIngredient("Sugar", 387, 0, 0);
var rice = new Westeros.Food.SimpleIngredient("Rice", 370, 8, 0);

var ricePudding = new Westeros.Food.CompoundIngredient("Rice Pudding");
ricePudding.AddIngredient(egg);
ricePudding.AddIngredient(rice);
ricePudding.AddIngredient(milk);
ricePudding.AddIngredient(sugar);

console.log("A serving of rice pudding contains:");
console.log(ricePudding.GetCalories() + " calories");
