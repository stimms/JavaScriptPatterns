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
            function CrowMailRequestor(bus) {
                this.bus = bus;
            }
            CrowMailRequestor.prototype.Request = function () {
                var message = {
                    __messageDate: new Date(),
                    __from: "requestor",
                    __corrolationId: Math.random(),
                    __messageName: "FindSquareRoot",
                    body: "Hello there. What is the square root of 9?"
                };
                this.bus.Subscribe("SquareRootFound", this);
                this.bus.Send(message);
                console.log("message sent!");
            };

            CrowMailRequestor.prototype.processMessage = function (message) {
                console.log("I got");
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
                    __messageName: "SquareRootFound",
                    body: "Pretty sure it is 3."
                };
                this.bus.Publish(response);
                console.log("Reply published");
            };
            return CrowMailResponder;
        })();
        Communication.CrowMailResponder = CrowMailResponder;

        var CrowMailBus = (function () {
            function CrowMailBus() {
                this.responder = new CrowMailResponder(this);
                this.responders = [];
            }
            CrowMailBus.prototype.Send = function (message) {
                var _this = this;
                if (message.__from == "requestor") {
                    process.nextTick(function () {
                        return _this.responder.processMessage(message);
                    });
                }
            };

            CrowMailBus.prototype.Publish = function (message) {
                for (var i = 0; i < this.responders.length; i++) {
                    if (this.responders[i].messageName == message.__messageName) {
                        (function (b) {
                            process.nextTick(function () {
                                return b.subscriber.processMessage(message);
                            });
                        })(this.responders[i]);
                    }
                }
            };

            CrowMailBus.prototype.Subscribe = function (messageName, subscriber) {
                this.responders.push({ messageName: messageName, subscriber: subscriber });
            };
            return CrowMailBus;
        })();
        Communication.CrowMailBus = CrowMailBus;

        var TestResponder1 = (function () {
            function TestResponder1() {
            }
            TestResponder1.prototype.processMessage = function (message) {
                console.log("Test responder 1: got a message");
            };
            return TestResponder1;
        })();
        Communication.TestResponder1 = TestResponder1;
        var TestResponder2 = (function () {
            function TestResponder2() {
            }
            TestResponder2.prototype.processMessage = function (message) {
                console.log("Test responder 2: got a message");
            };
            return TestResponder2;
        })();
        Communication.TestResponder2 = TestResponder2;
    })(Westeros.Communication || (Westeros.Communication = {}));
    var Communication = Westeros.Communication;
})(Westeros || (Westeros = {}));

var bus = new Westeros.Communication.CrowMailBus();
bus.Subscribe("SquareRootFound", new Westeros.Communication.TestResponder1());
bus.Subscribe("SquareRootFound", new Westeros.Communication.TestResponder2());
var requestor = new Westeros.Communication.CrowMailRequestor(bus);
requestor.Request();
