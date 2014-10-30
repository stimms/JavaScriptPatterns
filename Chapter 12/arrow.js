var Pages;
(function (Pages) {
    var LoginPage = (function () {
        function LoginPage(container) {
            var _this = this;
            container.on("click", ".login-link", function (item) {
                _this.login();
            });
            container.on("click", ".login-link", function (item) {
                this.login();
            });
        }
        LoginPage.prototype.login = function () {
            console.log("logged in");
        };
        return LoginPage;
    })();
    Pages.LoginPage = LoginPage;
})(Pages || (Pages = {}));
