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

    indexController.$inject = ['$http', '$scope', 'videoFeedService']

    function indexController($http, $scope, videoFeedService) {
        var vm = this;
        vm.arrList = [{Id: 1,Name: 'all'}, {Id: 2,Name: 'facebook'}, {Id: 3,Name: 'youtube'}];
        var promiseObj = videoFeedService.getVideoFeedList($http, vm);
        promiseObj.then(function(result){
            vm.isDataAvailable = true;
            vm.dataList = result;
        })

        vm.getSelectedValue = function(){
            var promiseObj = videoFeedService.getVideoFeedList($http, vm);
            promiseObj.then(function(result){
                vm.isDataAvailable = true;
                vm.dataList = result;
                console.log("vm.dataList--> ", vm.dataList);
                console.log("vm.ddlVideoTypes--> ", vm.ddlVideoTypes);
            })
        }
    }
})();
