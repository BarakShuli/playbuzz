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
        vm.selectedName = "";
        vm.arrList = [{
                Id: 1,
                Name: 'All'
            }, {
                Id: 2,
                Name: 'FB'
            }, {
                Id: 3,
                Name: 'Youtube'
            }];
        var cdnUrl = 'http://localhost:8080/getVideoFeed';
        vm.getVideoFeedList = function($http, vm){
            return $http.get(cdnUrl, {params:{key:vm.ddlVideoTypes}})
                .then(function(response) {
                    vm.dataList = response.data;
                });   
        }
        vm.getVideoFeedList($http, vm);

        vm.GetValue = function(){
            console.log(vm.ddlVideoTypes);
            vm.getVideoFeedList($http, vm);
        }
    }
})();
