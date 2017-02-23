var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var FavoriteAnimalController = (function () {
            function FavoriteAnimalController($mdDialog) {
                this.$mdDialog = $mdDialog;
            }
            FavoriteAnimalController.prototype.openDialog = function (animalName) {
                this.$mdDialog.show({
                    controller: AnimalDialogController,
                    controllerAs: 'modal',
                    templateUrl: 'animalDialog.html',
                    clickOutsideToClose: true,
                    locals: { animalName: animalName }
                });
            };
            return FavoriteAnimalController;
        }());
        FavoriteAnimalController.$inject = ['$mdDialog'];
        angular.module('MyApp').controller('FavoriteAnimalController', FavoriteAnimalController);
        var AnimalDialogController = (function () {
            function AnimalDialogController(animalName) {
                this.animalName = animalName;
            }
            return AnimalDialogController;
        }());
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
