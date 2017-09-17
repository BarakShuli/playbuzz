(function() {
    'use strict';

    angular
        .module('myApp.videoFeedService', [])
        .service('videoFeedService', videoFeedService);

    videoFeedService.$inject = ['$http'];

    function videoFeedService($http) {
        var cdnUrl = 'http://localhost:8080/getVideoFeed';
        this.isDataAvailable = false;
        var self = this;
        this.getVideoFeedList = function($http, vm){
            console.log("vm.ddlVideoTypes222--> ", vm.ddlVideoTypes);
            return $http.get(cdnUrl, {params:{key:vm.ddlVideoTypes}})
                .then(function(response) {
                    self.isDataAvailable = true;
                    return response.data;
                });   
        }
    }
})();
