var SimpleMVC;
(function (SimpleMVC) {
    var LoginModel = (function () {
        function LoginModel() {
        }
        return LoginModel;
    })();

    var LoginController = (function () {
        function LoginController(model) {
            this.model = model;
        }
        LoginController.prototype.Login = function (userName, password, rememberMe) {
            this.model.UserName = userName;
            this.model.Password = password;
            this.model.RememberMe = rememberMe;
            if (this.checkPassword(userName, password))
                this.model.LoginSuccessful;
else {
                this.model.LoginSuccessful = false;
                this.model.LoginErrorMessage = "Incorrect username or password";
            }
        };
        LoginController.prototype.checkPassword = function (UserName, Password) {
            return true;
        };
        return LoginController;
    })();
})(SimpleMVC || (SimpleMVC = {}));
