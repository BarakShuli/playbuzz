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

    function videoPlayerController() {
        var vm  = this;
        vm.$onInit = function(){
            console.log("componentsd222--> ", vm.list);
        }

        vm.$onChanges = function (changesObj) {
            if (changesObj.list) {
                console.log("onChanges--> ", changesObj.list);
            }
        };
    }
})();


