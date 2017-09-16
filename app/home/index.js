(function() {
    'use strict';

    angular
        .module('myApp.index', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/index', {
                templateUrl: 'home/index.html',
                controller: 'indexController',
                controllerAs:"vm"
            });
        }])
        .controller('indexController', indexController);

    indexController.$inject = ['$http']

    function indexController($http) {
        var vm = this;
        vm.x = "{datalisy:{a:1,b:2}}";
        vm.getVideoFeedList = function($http, vm){
            return $http.get('http://localhost:8080/getVideoFeed')
                .then(function(response) {
                    vm.dataList = response.data;
                });   
        }
        vm.getVideoFeedList($http, vm);
    }
})();
