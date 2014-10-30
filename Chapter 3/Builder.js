var Westeros;
(function (Westeros) {
    var Tournament = (function () {
        function Tournament() {
        }
        return Tournament;
    })();
    Westeros.Tournament = Tournament;

    var TournamentBuilder = (function () {
        function TournamentBuilder() {
        }
        TournamentBuilder.prototype.build = function (builder) {
            return builder.build();
        };
        return TournamentBuilder;
    })();
    Westeros.TournamentBuilder = TournamentBuilder;

    var LannisterTournamentBuilder = (function () {
        function LannisterTournamentBuilder() {
        }
        LannisterTournamentBuilder.prototype.build = function () {
            var tournament = new Tournament();
            tournament.events.push(new Event("Joust"));
            tournament.events.push(new Event("Melee"));

            tournament.attendees.push(new Attendee("Jamie"));

            tournament.prizes.push(new Prize("Gold"));
            tournament.prizes.push(new Prize("More Gold"));

            return tournament;
        };
        return LannisterTournamentBuilder;
    })();
    Westeros.LannisterTournamentBuilder = LannisterTournamentBuilder;

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
    Westeros.BaratheonTournamentBuilder = BaratheonTournamentBuilder;

    var Event = (function () {
        function Event(name) {
            this.name = name;
        }
        return Event;
    })();
    Westeros.Event = Event;

    var Prize = (function () {
        function Prize(name) {
            this.name = name;
        }
        return Prize;
    })();
    Westeros.Prize = Prize;

    var Attendee = (function () {
        function Attendee(name) {
            this.name = name;
        }
        return Attendee;
    })();
    Westeros.Attendee = Attendee;
})(Westeros || (Westeros = {}));

var god1 = new Westeros.Religion.SevenGodsAdapter();
var god2 = new Westeros.Religion.DrownedGodAdapter();
var god3 = new Westeros.Religion.OldGodsAdapter();

var gods = [god1, god2, god3];
for(var i =0; i<gods.length; i++){
  gods[i].praryTo();
}