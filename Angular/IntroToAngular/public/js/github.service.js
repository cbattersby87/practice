(function () {

    var github = function ($http) {
        var getUser = function (username) {
            return $http.get('https://api.github.com/users/' + username)
                    .then(function(response){
                        return response.data;
                    });
    };

    var getRepos = function(user){
        $http.get(user.repos_url)
            .then(function(){
                return response.data;
            })
    };

    return {
        getUser: getUser,
        getRepos: getRepos
    };
};

//this tells angular to give a reference to myApp 
var module = angular.module('myApp');

//this allows us to register to the contoller
module.factory('github', github)

})();