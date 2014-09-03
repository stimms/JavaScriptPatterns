var Castle = (function () {
    function Castle(name) {
        this.name = name;
    }
    Castle.prototype.Build = function () {
        console.log("Castle built: " + this.name);
    };
    return Castle;
})();
