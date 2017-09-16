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

    indexController.$inject = ['$http', 'videoFeedService']

    function indexController($http, videoFeedService) {
        var vm = this;
        vm.arrList = [{Id: 1,Name: 'All'}, {Id: 2,Name: 'FB'}, {Id: 3,Name: 'Youtube'}];
        videoFeedService.getVideoFeedList($http, vm);
        vm.getSelectedValue = function(){
            videoFeedService.getVideoFeedList($http, vm);
        }
    }
})();
