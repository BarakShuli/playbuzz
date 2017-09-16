(function() {
    'use strict';

    angular
        .module('myApp.videoFeedService', [])
        .service('videoFeedService', videoFeedService);

    videoFeedService.$inject = ['$http'];

    function videoFeedService($http) {
        
        // var cdnUrl = 'http://localhost:8080/getVideoFeed';
        // this.getVideoFeedList = function($http, vm){
        //     return $http.get(cdnUrl, {params:{key:vm.ddlVideoTypes}})
        //         .then(function(response) {
        //             return response.data;
        //         });   
        // }
    }
})();
