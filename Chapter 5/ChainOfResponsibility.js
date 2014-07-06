var Westros;
(function (Westros) {
    (function (JudicialSystem) {
        var Complaint = (function () {
            function Complaint() {
                this.ComplainingParty = "";
                this.ComplaintAbout = "";
                this.Complaint = "";
            }
            return Complaint;
        })();
        JudicialSystem.Complaint = Complaint;

        var ClerkOfTheCourt = (function () {
            function ClerkOfTheCourt() {
            }
            ClerkOfTheCourt.prototype.IsInterestedInComplaint = function (complaint) {
                //decide if this is a complaint which can be solved by the clerk
                return false;
            };

            ClerkOfTheCourt.prototype.ListenToComplaint = function (complaint) {
                //perform some operation
                //return solution to the complaint
                return "";
            };
            return ClerkOfTheCourt;
        })();
        JudicialSystem.ClerkOfTheCourt = ClerkOfTheCourt;

        var King = (function () {
            function King() {
            }
            King.prototype.IsInterestedInComplaint = function (complaint) {
                return true;
            };

            King.prototype.ListenToComplaint = function (complaint) {
                //perform some operation
                //return solution to the complaint
                return "";
            };
            return King;
        })();
        JudicialSystem.King = King;

        var ComplaintResolver = (function () {
            function ComplaintResolver() {
                this.complaintListeners = new Array();
                this.complaintListeners.push(new ClerkOfTheCourt());
                this.complaintListeners.push(new King());
            }
            ComplaintResolver.prototype.ResolveComplaint = function (complaint) {
                for (var i = 0; i < this.complaintListeners.length; i++) {
                    if (this.complaintListeners[i].IsInterestedInComplaint(complaint)) {
                        return this.complaintListeners[i].ListenToComplaint(complaint);
                    }
                }
            };
            return ComplaintResolver;
        })();
        JudicialSystem.ComplaintResolver = ComplaintResolver;
    })(Westros.JudicialSystem || (Westros.JudicialSystem = {}));
    var JudicialSystem = Westros.JudicialSystem;
})(Westros || (Westros = {}));
