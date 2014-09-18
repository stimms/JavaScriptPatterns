var Westeros;
(function (Westeros) {
    (function (Communication) {
        var Message = (function () {
            function Message() {
            }
            return Message;
        })();
        Communication.Message = Message;

        var CrowMailRequestor = (function () {
            function CrowMailRequestor() {
            }
            CrowMailRequestor.prototype.Request = function () {
                var message = {
                    __messageDate: new Date(),
                    __from: "requestor",
                    __corrolationId: Math.random(),
                    body: "Hello there. What is the square root of 9?"
                };
                var bus = new CrowMailBus(this);
                bus.Send(message);
                console.log("message sent!");
            };

            CrowMailRequestor.prototype.processMessage = function (message) {
                console.dir(message);
            };
            return CrowMailRequestor;
        })();
        Communication.CrowMailRequestor = CrowMailRequestor;

        var CrowMailResponder = (function () {
            function CrowMailResponder(bus) {
                this.bus = bus;
            }
            CrowMailResponder.prototype.processMessage = function (message) {
                var response = {
                    __messageDate: new Date(),
                    __from: "responder",
                    __corrolationId: message.__corrolationId,
                    body: "Pretty sure it is 3."
                };
                this.bus.Send(response);
                console.log("Reply sent");
            };
            return CrowMailResponder;
        })();
        Communication.CrowMailResponder = CrowMailResponder;

        var CrowMailBus = (function () {
            function CrowMailBus(requestor) {
                this.requestor = requestor;
                this.responder = new CrowMailResponder(this);
            }
            CrowMailBus.prototype.Send = function (message) {
                var _this = this;
                if (message.__from == "requestor") {
                    process.nextTick(function () {
                        return _this.responder.processMessage(message);
                    });
                } else {
                    process.nextTick(function () {
                        return _this.requestor.processMessage(message);
                    });
                }
            };
            return CrowMailBus;
        })();
        Communication.CrowMailBus = CrowMailBus;
    })(Westeros.Communication || (Westeros.Communication = {}));
    var Communication = Westeros.Communication;
})(Westeros || (Westeros = {}));

var requestor = new Westeros.Communication.CrowMailRequestor();
requestor.Request();
