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
                function CreateCastleView(document, viewModel) {
                    var _this = this;
                    this.document = document;
                    this.viewModel = viewModel;
                    this.document.getElementById("saveButton").addEventListener("click", function () {
                        return _this.saveCastle();
                    });
                    this.document.getElementById("name").addEventListener("change", this.nameChangedInView);
                    this.document.getElementById("description").addEventListener("change", this.descriptionChangedInView);
                    this.document.getElementById("outerWallThickness").addEventListener("change", this.outerWallThicknessChangedInView);
                    this.document.getElementById("numberOfTowers").addEventListener("change", this.numberOfTowersChangedInView);
                    this.document.getElementById("moat").addEventListener("change", this.moatChangedInView);
                }
                CreateCastleView.prototype.nameChangedInView = function (name) {
                    this.viewModel.nameChangedInView(name);
                };

                CreateCastleView.prototype.nameChangedInViewModel = function (name) {
                    this.document.getElementById("name").value = name;
                };

                CreateCastleView.prototype.descriptionChangedInView = function (description) {
                    this.viewModel.descriptionChangedInView(description);
                };

                CreateCastleView.prototype.descriptionChangedInViewModel = function (description) {
                    this.document.getElementById("description").value = description;
                };

                CreateCastleView.prototype.numberOfTowersChangedInView = function (numberOfTowers) {
                    this.viewModel.numberOfTowersChangedInView(numberOfTowers);
                };

                CreateCastleView.prototype.numberOfTowersChangedInViewModel = function (numberOfTowers) {
                    this.document.getElementById("numberOfTowers").value = numberOfTowers;
                };

                CreateCastleView.prototype.outerWallThicknessChangedInView = function (outerWallThickness) {
                    this.viewModel.outerWallThicknessChangedInView(outerWallThickness);
                };

                CreateCastleView.prototype.outerWallThicknessChangedInViewModel = function (outerWallThickness) {
                    this.document.getElementById("outerWallThickness").value = outerWallThickness;
                };

                CreateCastleView.prototype.moatChangedInView = function (moat) {
                    this.viewModel.moatChangedInView(moat);
                };

                CreateCastleView.prototype.moatChangedInViewModel = function (moat) {
                    this.document.getElementById("moat").value = moat;
                };

                CreateCastleView.prototype.isValidChangedInViewModel = function (validationResult) {
                    this.document.getElementById("validationWarning").innerHtml = validationResult.Errors;
                    this.document.getElementById("validationWarning").className = "visible";
                };
                CreateCastleView.prototype.saveCastle = function () {
                    this.viewModel.saveCastle();
                };
                return CreateCastleView;
            })();
            CastleDesign.CreateCastleView = CreateCastleView;

            var CreateCastleViewModel = (function () {
                function CreateCastleViewModel(document) {
                    this.document = document;
                    this.model = new CreateCastleModel();
                    this.view = new CreateCastleView(document, this);
                }
                CreateCastleViewModel.prototype.nameChangedInView = function (name) {
                    this.name = name;
                };

                CreateCastleViewModel.prototype.nameChangedInViewModel = function (name) {
                    this.view.nameChangedInViewModel(name);
                };

                CreateCastleViewModel.prototype.descriptionChangedInView = function (description) {
                    this.description = description;
                };

                CreateCastleViewModel.prototype.descriptionChangedInViewModel = function (description) {
                    this.view.descriptionChangedInViewModel(description);
                };

                CreateCastleViewModel.prototype.outerWallThicknessChangedInView = function (outerWallThickness) {
                    this.outerWallThickness = outerWallThickness;
                };

                CreateCastleViewModel.prototype.outerWallThicknessChangedInViewModel = function (outerWallThickness) {
                    this.view.outerWallThicknessChangedInViewModel(outerWallThickness);
                };

                CreateCastleViewModel.prototype.numberOfTowersChangedInView = function (numberOfTowers) {
                    this.numberOfTowers = numberOfTowers;
                };

                CreateCastleViewModel.prototype.numberOfTowersChangedInViewModel = function (numberOfTowers) {
                    this.view.numberOfTowersChangedInViewModel(numberOfTowers);
                };

                CreateCastleViewModel.prototype.moatChangedInView = function (moat) {
                    this.moat = moat;
                };

                CreateCastleViewModel.prototype.moatChangedInViewModel = function (moat) {
                    this.view.moatChangedInViewModel(moat);
                };

                CreateCastleViewModel.prototype.saveCastle = function () {
                    var validationResult = this.validate();
                    if (validationResult.IsValid) {
                        //write to the model
                        this.saveCastleSuccess();
                    } else {
                        this.view.isValidChangedInViewModel(validationResult);
                    }
                };

                CreateCastleViewModel.prototype.saveCastleSuccess = function () {
                    //do whatever is needed when save is successful.
                    //Possibly update the view model
                };

                CreateCastleViewModel.prototype.validate = function () {
                    var validationResult = new validationResult();
                    if (!this.name || this.name === "") {
                        validationResult.IsValid = false;
                        validationResult.Errors.push("Name is required");
                    }
                    return;
                };
                return CreateCastleViewModel;
            })();
            CastleDesign.CreateCastleViewModel = CreateCastleViewModel;
        })(Meta.CastleDesign || (Meta.CastleDesign = {}));
        var CastleDesign = Meta.CastleDesign;
    })(Westeros.Meta || (Westeros.Meta = {}));
    var Meta = Westeros.Meta;
})(Westeros || (Westeros = {}));
