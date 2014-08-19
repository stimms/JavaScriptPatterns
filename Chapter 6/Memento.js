var Westros;
(function (Westros) {
    (function (Mathmatics) {
        var Fibonacci = (function () {
            function Fibonacci() {
                this.memorizedValues = [];
            }
            Fibonacci.prototype.NaieveFib = function (n) {
                if (n == 0)
                    return 0;
                if (n <= 2)
                    return 1;
                return this.NaieveFib(n - 1) + this.NaieveFib(n - 2);
            };

            Fibonacci.prototype.MemetoFib = function (n) {
                if (n == 0)
                    return 0;
                if (n <= 2)
                    return 1;
                if (!this.memorizedValues[n])
                    this.memorizedValues[n] = this.MemetoFib(n - 1) + this.MemetoFib(n - 2);
                return this.memorizedValues[n];
            };
            return Fibonacci;
        })();
        Mathmatics.Fibonacci = Fibonacci;
    })(Westros.Mathmatics || (Westros.Mathmatics = {}));
    var Mathmatics = Westros.Mathmatics;
})(Westros || (Westros = {}));

var fib = new Westros.Mathmatics.Fibonacci();

start = new Date();
console.log(fib.NaieveFib(140));
console.log(fib.memorizedValues.length);
end = new Date();
console.log(end-start);