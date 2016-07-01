(function () {
    var myApp = angular.module('myApp', []);

    function mainController($scope, $http){
        var onUserComplete = function (response) {
            $scope.user = response.data
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        $http.get('https://api.github.com/users/cbattersby87')
            .then(onUserComplete);

        $scope.message = "Hello angular";
    }

    myApp.controller("mainController", mainController);

})();