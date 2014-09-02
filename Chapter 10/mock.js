var Knight = (function () {
    function Knight(credentialFactory) {
        this.credentialFactory = credentialFactory;
    }
    Knight.prototype.presentCredentials = function (toRoyalty) {
        console.log("Presenting credentials to " + toRoyalty);
        this.credentialFactory.Create();
        return true;
    };
    return Knight;
})();

var MockCredentialFactory = (function () {
    function MockCredentialFactory() {
        this.timesCalled = 0;
    }
    MockCredentialFactory.prototype.Create = function () {
        this.timesCalled++;
    };

    MockCredentialFactory.prototype.Verify = function () {
        assert(this.timesCalled == 3);
    };
    return MockCredentialFactory;
})();

function assert(value) {
    if (!value)
        throw "Assertion failure";
}

var credentialFactory = new MockCredentialFactory();
var knight = new Knight(credentialFactory);

var credentials = knight.presentCredentials("Lord Snow");
credentials = knight.presentCredentials("Queen Cersei");
credentials = knight.presentCredentials("Lord Stark");

credentialFactory.Verify();
