var Westros;
(function (Westros) {
    var Tournament = (function () {
        function Tournament() {
        }
        return Tournament;
    })();
    Westros.Tournament = Tournament;

    var TournamentBuilder = (function () {
        function TournamentBuilder() {
        }
        TournamentBuilder.prototype.build = function (builder) {
            return builder.build();
        };
        return TournamentBuilder;
    })();
    Westros.TournamentBuilder = TournamentBuilder;

    var LanisterTournamentBuilder = (function () {
        function LanisterTournamentBuilder() {
        }
        LanisterTournamentBuilder.prototype.build = function () {
            var tournament = new Tournament();
            tournament.events.push(new Event("Joust"));
            tournament.events.push(new Event("Melee"));

            tournament.attendees.push(new Attendee("Jamie"));

            tournament.prizes.push(new Prize("Gold"));
            tournament.prizes.push(new Prize("More Gold"));

            return tournament;
        };
        return LanisterTournamentBuilder;
    })();
    Westros.LanisterTournamentBuilder = LanisterTournamentBuilder;

    var BaratheonTournamentBuilder = (function () {
        function BaratheonTournamentBuilder() {
        }
        BaratheonTournamentBuilder.prototype.build = function () {
            var tournament = new Tournament();
            tournament.events.push(new Event("Joust"));
            tournament.events.push(new Event("Melee"));

            tournament.attendees.push(new Attendee("Stannis"));
            tournament.attendees.push(new Attendee("Robert"));

            return tournament;
        };
        return BaratheonTournamentBuilder;
    })();
    Westros.BaratheonTournamentBuilder = BaratheonTournamentBuilder;

    var Event = (function () {
        function Event(name) {
            this.name = name;
        }
        return Event;
    })();
    Westros.Event = Event;

    var Prize = (function () {
        function Prize(name) {
            this.name = name;
        }
        return Prize;
    })();
    Westros.Prize = Prize;

    var Attendee = (function () {
        function Attendee(name) {
            this.name = name;
        }
        return Attendee;
    })();
    Westros.Attendee = Attendee;
})(Westros || (Westros = {}));
