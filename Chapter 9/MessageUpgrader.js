var Login;
(function (Login) {
    var CreateUserv1Message = (function () {
        function CreateUserv1Message() {
        }
        return CreateUserv1Message;
    })();
    Login.CreateUserv1Message = CreateUserv1Message;

    var CreateUserv2Message = (function () {
        function CreateUserv2Message() {
        }
        return CreateUserv2Message;
    })();
    Login.CreateUserv2Message = CreateUserv2Message;

    var CreateUserv1tov2Upgrader = (function () {
        function CreateUserv1tov2Upgrader(bus) {
            this.bus = bus;
        }
        CreateUserv1tov2Upgrader.prototype.processMessage = function (message) {
            message.__messageName = "CreateUserv1Message";
            delete message.UserTitle;
            this.bus.publish(message);
        };
        return CreateUserv1tov2Upgrader;
    })();
    Login.CreateUserv1tov2Upgrader = CreateUserv1tov2Upgrader;
})(Login || (Login = {}));
