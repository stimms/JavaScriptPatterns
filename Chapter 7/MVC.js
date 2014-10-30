HTMLElement.prototype.getElementById = function () {
};

var Westeros;
(function (Westeros) {
    (function (Meta) {
        (function (CastleDesign) {
            var Model = (function () {
                function Model(name, description, outerWallThickness, numberOfTowers, moat) {
                    this.name = name;
                    this.description = description;
                    this.outerWallThickness = outerWallThickness;
                    this.numberOfTowers = numberOfTowers;
                    this.moat = moat;
                }
                return Model;
            })();
            CastleDesign.Model = Model;

            var ValidationResult = (function () {
                function ValidationResult() {
                }
                ValidationResult.prototype.constructor = function () {
                    this.Errors = new Array();
                };
                return ValidationResult;
            })();
            CastleDesign.ValidationResult = ValidationResult;

            var CreateCastleView = (function () {
                function CreateCastleView(document, controller, model, validationResult) {
                    var _this = this;
                    this.document = document;
                    this.controller = controller;
                    this.model = model;
                    this.validationResult = validationResult;
                    this.document.getElementById("saveButton").addEventListener("click", function () {
                        return _this.saveCastle();
                    });
                    this.document.getElementById("castleName").value = model.name;
                    this.document.getElementById("description").value = model.description;
                    this.document.getElementById("outerWallThickness").value = model.outerWallThickness;
                    this.document.getElementById("numberOfTowers").value = model.numberOfTowers;
                    this.document.getElementById("moat").value = model.moat;
                }
                CreateCastleView.prototype.saveCastle = function () {
                    var data = {
                        name: this.document.getElementById("castleName").value,
                        description: this.document.getElementById("description").value,
                        outerWallThickness: this.document.getElementById("outerWallThickness").value,
                        numberOfTowers: this.document.getElementById("numberOfTowers").value,
                        moat: this.document.getElementById("moat").value
                    };
                    this.controller.saveCastle(data);
                };
                return CreateCastleView;
            })();
            CastleDesign.CreateCastleView = CreateCastleView;

            var CreateCastleSuccess = (function () {
                function CreateCastleSuccess(document, controller, model) {
                    this.document = document;
                    this.controller = controller;
                    this.model = model;
                }
                return CreateCastleSuccess;
            })();
            CastleDesign.CreateCastleSuccess = CreateCastleSuccess;

            var Controller = (function () {
                function Controller(document) {
                    this.document = document;
                }
                Controller.prototype.createCastle = function () {
                    this.setView(new CreateCastleView(this.document, this));
                };

                Controller.prototype.saveCastle = function (data) {
                    var validationResult = this.validate(data);
                    if (validationResult.IsValid) {
                        //save castle to storage
                        this.saveCastleSuccess(data);
                    } else {
                        this.setView(new CreateCastleView(this.document, this, data, validationResult));
                    }
                };

                Controller.prototype.saveCastleSuccess = function (data) {
                    this.setView(new CreateCastleSuccess(this.document, this, data));
                };

                Controller.prototype.setView = function (view) {
                    //send the view to the browser
                };

                Controller.prototype.validate = function (model) {
                    var validationResult = new validationResult();
                    if (!model.name || model.name === "") {
                        validationResult.IsValid = false;
                        validationResult.Errors.push("Name is required");
                    }
                    return;
                };
                return Controller;
            })();
            CastleDesign.Controller = Controller;
        })(Meta.CastleDesign || (Meta.CastleDesign = {}));
        var CastleDesign = Meta.CastleDesign;
    })(Westeros.Meta || (Westeros.Meta = {}));
    var Meta = Westeros.Meta;
})(Westeros || (Westeros = {}));
