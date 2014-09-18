var Westeros;
(function (Westeros) {
    (function (Tourism) {
        var HamiltonianTour = (function () {
            function HamiltonianTour(options) {
                this.options = options;
            }
            HamiltonianTour.prototype.StartTour = function () {
                if (this.options.onTourStart && typeof (this.options.onTourStart) === "function")
                    this.options.onTourStart();
                this.VisitAttraction("King's Landing");
                this.VisitAttraction("Winterfell");
                this.VisitAttraction("Mountains of Dorne");
                this.VisitAttraction("Eyrie");
                if (this.options.onTourCompletion && typeof (this.options.onTourCompletion) === "function")
                    this.options.onTourCompletion();
            };

            HamiltonianTour.prototype.VisitAttraction = function (AttractionName) {
                if (this.options.onEntryToAttraction && typeof (this.options.onEntryToAttraction) === "function")
                    this.options.onEntryToAttraction(AttractionName);

                //do whatever one does in a Attraction
                if (this.options.onExitFromAttraction && typeof (this.options.onExitFromAttraction) === "function")
                    this.options.onExitFromAttraction(AttractionName);
            };
            return HamiltonianTour;
        })();
        Tourism.HamiltonianTour = HamiltonianTour;

        var HamiltonianTourOptions = (function () {
            function HamiltonianTourOptions() {
            }
            return HamiltonianTourOptions;
        })();
        Tourism.HamiltonianTourOptions = HamiltonianTourOptions;
    })(Westeros.Tourism || (Westeros.Tourism = {}));
    var Tourism = Westeros.Tourism;
})(Westeros || (Westeros = {}));

var options = new Westeros.Tourism.HamiltonianTourOptions();
options.onTourStart = function () {
    console.log("I love touring!");
};
var tour = new Westeros.Tourism.HamiltonianTour(options);
tour.StartTour();
