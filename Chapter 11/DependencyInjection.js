var UserManager = (function () {
    function UserManager(database, userEmailer) {
        this.database = database;
        this.userEmailer = userEmailer;
    }
    return UserManager;
})();

var Database = (function () {
    function Database() {
    }
    return Database;
})();

var UserEmailer = (function () {
    function UserEmailer() {
    }
    return UserEmailer;
})();
