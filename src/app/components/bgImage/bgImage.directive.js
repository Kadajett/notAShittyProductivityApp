(function() {
  'use strict';

  angular.module('notAshittyProductivityApp')
    .directive('bgImage', bgImage);

  function bgImage(BgImage) {
    return {
      restrict: 'A', //E = element, A = attribute, C = class, M = comment
      link: function($scope, element, attrs) {
        function init() {
          getBgImage.call($scope);
        }

        function getBgImage() {
          BgImage.getBgImage()
            .then(function(res) {
              if (res.urls) {
                this.css({
                    'background-image': 'url(' + res.urls.full +')',
                    'background-size' : 'cover'
                })
              } else if(res.url){
                this.css({
                    'background-image': 'url(' + res.url +')',
                    'background-size' : 'cover'
                })
              } else {
                this.css({
                    'background-image': 'url(' + res +')',
                    'background-size' : 'cover'
                })
              }
            })
        }
        init();
      }
    }
  }
}());
