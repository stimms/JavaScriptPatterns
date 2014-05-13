var Westros;
(function (Westros) {
    var Wall = (function () {
        function Wall() {
            this.height = 0;
            if (Wall._instance)
                throw new Error("This is a singleton, use getInstance to get an instance");
            Wall._instance = this;
        }
        Wall.prototype.setHeight = function (height) {
            this.height = height;
        };

        Wall.prototype.getStatus = function () {
            console.log("Wall is " + this.height + " meters tall");
        };
        Wall.getInstance = function () {
            if (!Wall._instance) {
                Wall._instance = new Wall();
            }

            return Wall._instance;
        };
        Wall._instance = null;
        return Wall;
    })();
    Westros.Wall = Wall;
})(Westros || (Westros = {}));

var wall = Westros.Wall.getInstance();
wall.setHeight(10);
var wall2 = Westros.Wall.getInstance();
wall2.getStatus();
var wall3 = new Westros.Wall();
wall3.getStatus();
