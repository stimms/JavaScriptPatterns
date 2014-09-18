HTMLElement.prototype.getElementById = function () {
};

var Westeros;
(function (Westeros) {
    (function (Meta) {
        (function (CastleDesign) {
            var CreateCastleModel = (function () {
                function CreateCastleModel(name, description, outerWallThickness, numberOfTowers, moat) {
                    this.name = name;
                    this.description = description;
                    this.outerWallThickness = outerWallThickness;
                    this.numberOfTowers = numberOfTowers;
                    this.moat = moat;
                }
                return CreateCastleModel;
            })();
            CastleDesign.CreateCastleModel = CreateCastleModel;

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
                function CreateCastleView(document, presenter) {
                    this.document = document;
                    this.presenter = presenter;
                    this.document.getElementById("saveButton").addEventListener("click", this.saveCastle);
                }
                CreateCastleView.prototype.setCastleName = function (name) {
                    this.document.getElementById("castleName").value = name;
                };

                CreateCastleView.prototype.getCastleName = function () {
                    return this.document.getElementById("castleName").value;
                };

                CreateCastleView.prototype.setDescription = function (description) {
                    this.document.getElementById("description").value = description;
                };

                CreateCastleView.prototype.getDescription = function () {
                    return this.document.getElementById("description").value;
                };

                CreateCastleView.prototype.setOuterWallThickness = function (outerWallThickness) {
                    this.document.getElementById("outerWallThickness").value = outerWallThickness;
                };

                CreateCastleView.prototype.getOuterWallThickness = function () {
                    return this.document.getElementById("outerWallThickness").value;
                };

                CreateCastleView.prototype.setNumberOfTowers = function (numberOfTowers) {
                    this.document.getElementById("numberOfTowers").value = numberOfTowers;
                };

                CreateCastleView.prototype.getNumberOfTowers = function () {
                    return parseInt(this.document.getElementById("numberOfTowers").value);
                };

                CreateCastleView.prototype.setMoat = function (moat) {
                    this.document.getElementById("moat").value = moat;
                };

                CreateCastleView.prototype.getMoat = function () {
                    return this.document.getElementById("moat").value;
                };

                CreateCastleView.prototype.setValid = function (validationResult) {
                };

                CreateCastleView.prototype.saveCastle = function () {
                    this.presenter.saveCastle();
                };
                return CreateCastleView;
            })();
            CastleDesign.CreateCastleView = CreateCastleView;

            var CreateCastlePresenter = (function () {
                function CreateCastlePresenter(document) {
                    this.document = document;
                    this.model = new CreateCastleModel();
                    this.view = new CreateCastleView(document, this);
                }
                CreateCastlePresenter.prototype.saveCastle = function () {
                    var data = {
                        name: this.view.getCastleName(),
                        description: this.view.getDescription(),
                        outerWallThickness: this.view.getOuterWallThickness(),
                        numberOfTowers: this.view.getNumberOfTowers(),
                        moat: this.view.getMoat()
                    };

                    var validationResult = this.validate(data);
                    if (validationResult.IsValid) {
                        //write to the model
                        this.saveCastleSuccess(data);
                    } else {
                        this.view.setValid(validationResult);
                    }
                };

                CreateCastlePresenter.prototype.saveCastleSuccess = function (data) {
                    //redirect to different presenter
                };

                CreateCastlePresenter.prototype.setView = function (view) {
                    //send the view to the browser
                };

                CreateCastlePresenter.prototype.validate = function (model) {
                    var validationResult = new validationResult();
                    if (!model.name || model.name === "") {
                        validationResult.IsValid = false;
                        validationResult.Errors.push("Name is required");
                    }
                    return;
                };
                return CreateCastlePresenter;
            })();
            CastleDesign.CreateCastlePresenter = CreateCastlePresenter;
        })(Meta.CastleDesign || (Meta.CastleDesign = {}));
        var CastleDesign = Meta.CastleDesign;
    })(Westeros.Meta || (Westeros.Meta = {}));
    var Meta = Westeros.Meta;
})(Westeros || (Westeros = {}));
