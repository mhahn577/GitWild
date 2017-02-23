namespace MyApp.Controllers {

    class FavoriteAnimalController {

        public openDialog(animalName: string) {
            this.$mdDialog.show({
                controller: AnimalDialogController,
                controllerAs: 'modal',
                templateUrl: 'animalDialog.html',
                clickOutsideToClose: true,
                locals: { animalName: animalName }
            })
        }

        static $inject = ['$mdDialog'];

        constructor(
            private $mdDialog: angular.material.IDialogService
        ) { }
    }

    angular.module('MyApp').controller('FavoriteAnimalController', FavoriteAnimalController);

    class AnimalDialogController {
        constructor(public animalName: string) { }
    }
}
