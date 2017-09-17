(function() {
    'use strict';

    angular
        .module('myApp.videoPlayer', [])
        .component('videoPlayer', {
            templateUrl: 'components/videoPlayer/videoPlayer.html',
            bindings: {
                list: '='
            },
            controller: videoPlayerController,
            controllerAs: "vm"
            });

    videoPlayerController.$inject = ['$compile', '$scope', '$sce'];

    function videoPlayerController($compile, $scope, $sce) {
        var vm  = this;
        vm.$onInit = function(){
            vm.videoList = vm.list;
        }

        vm.getVideoUrl = function(baseUrl, sourceId){
            var html = [];
            html.push(baseUrl);
            html.push(sourceId);
            return html.join("").toString();
        }

        vm.trustSrc = function(baseUrl, sourceId) {
            var src = vm.getVideoUrl(baseUrl, sourceId);
            return $sce.trustAsResourceUrl(src);
        }
    }
})();


