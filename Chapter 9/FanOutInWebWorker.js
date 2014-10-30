var Westeros;
(function (Westeros) {
    (function (Potion) {
        var Ingredient = (function () {
            function Ingredient() {
            }
            return Ingredient;
        })();
        Potion.Ingredient = Ingredient;

        var CombinedIngredient = (function () {
            function CombinedIngredient() {
            }
            CombinedIngredient.prototype.Add = function (ingredient) {
            };
            return CombinedIngredient;
        })();
        Potion.CombinedIngredient = CombinedIngredient;
    })(Westeros.Potion || (Westeros.Potion = {}));
    var Potion = Westeros.Potion;
})(Westeros || (Westeros = {}));

var combinedIngredient;
self.addEventListener('message', function (e) {
    var data = e.data;
    var ingredients = data.ingredients;
    combinedIngredient = new Westeros.Potion.CombinedIngredient();
    for (var i = 0; i < ingredients.length; i++) {
        combinedIngredient.Add(ingredients[i]);
    }
    console.log("calculating combination");
    setTimeout(combinationComplete, 2000);
}, false);

function combinationComplete() {
    console.log("combination complete");
    (self).postMessage({ event: 'combinationComplete', result: combinedIngredient });
}
