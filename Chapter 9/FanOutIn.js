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

        var Step = (function () {
            function Step() {
            }
            return Step;
        })();

        var Combiner = (function () {
            function Combiner() {
                this.waitingForChunks = 0;
            }
            Combiner.prototype.combine = function (ingredients) {
                var _this = this;
                console.log("Starting combination");
                if (ingredients.length > 10) {
                    for (var i = 0; i < Math.ceil(ingredients.length / 2); i++) {
                        this.waitingForChunks++;
                        console.log("Dispatched chunks count at: " + this.waitingForChunks);
                        var worker = new Worker("FanOutInWebWorker.js");
                        worker.addEventListener('message', function (message) {
                            return _this.complete(message);
                        });
                        worker.postMessage({ ingredients: ingredients.slice(i, i * 2) });
                    }
                }
            };
            Combiner.prototype.complete = function (message) {
                this.waitingForChunks--;
                console.log("Outstanding chunks count at: " + this.waitingForChunks);
                if (this.waitingForChunks == 0)
                    console.log("All chunks received");
            };
            return Combiner;
        })();
        Potion.Combiner = Combiner;
    })(Westeros.Potion || (Westeros.Potion = {}));
    var Potion = Westeros.Potion;
})(Westeros || (Westeros = {}));
