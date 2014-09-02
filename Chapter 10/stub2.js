var Knight = (function () {
    function Knight(credentialFactory) {
        this.credentialFactory = credentialFactory;
    }
    Knight.prototype.presentCredentials = function (toRoyalty) {
        console.log("Presenting credentials to " + toRoyalty);
        toRoyalty.send(this.credentialFactory.Create());
        return true;
    };
    return Knight;
})();

var CredentialFactory = (function () {
    function CredentialFactory() {
    }
    CredentialFactory.prototype.Create = function () {
        //do complicated credential things
    };
    return CredentialFactory;
})();

var StubCredentialFactory = (function () {
    function StubCredentialFactory() {
        this.callCounter = 0;
    }
    StubCredentialFactory.prototype.Create = function () {
        if (this.callCounter == 0)
            return new SimpleCredential();
        if (this.callCounter == 1)
            return new CredentialWithSeal();
        if (this.callCounter == 2)
            return null;
        this.callCounter++;
    };
    return StubCredentialFactory;
})();

function assert(value) {
    if (!value)
        throw "Assertion failure";
}

var knight = new Knight(new CredentialFactory());
knight.presentCredentials("Queen Cersei");

var knight = new Knight(new StubCredentialFactory());
var credentials = knight.presentCredentials("Lord Snow");
assert(credentials.type === "SimpleCredentials");
credentials = knight.presentCredentials("Queen Cersei");
assert(credentials.type === "CredentialWithSeal");
credentials = knight.presentCredentials("Lord Stark");
assert(credentials == null);
