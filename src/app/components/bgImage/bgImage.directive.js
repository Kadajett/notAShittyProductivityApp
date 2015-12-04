(function() {
  'use strict';

  angular.module('notAshittyProductivityApp')
    .directive('bgImage', bgImage);

  function bgImage(BgImage) {
    return {
      restrict: 'A', //E = element, A = attribute, C = class, M = comment
      link: function($scope, element, attrs) {
        function init() {
          getBgImage.call(element);
        }

        function getBgImage() {
          var self = this;
          BgImage.getBgImage()
            .then(function(res) {
              if (res.urls) {
                self.css({
                    'background': 'url(' + res.urls.regular +') no-repeat center center fixed',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
                    'background-size': 'cover'
                })
              } else if(res.url){
                self.css({
                  'background': 'url(' + res.url +') no-repeat center center fixed',
                  '-webkit-background-size': 'cover',
                  '-moz-background-size': 'cover',
                  '-o-background-size': 'cover',
                  'background-size': 'cover'
                })
              } else {
                self.css({
                  'background': 'url(' + res +') no-repeat center center fixed',
                  '-webkit-background-size': 'cover',
                  '-moz-background-size': 'cover',
                  '-o-background-size': 'cover',
                  'background-size': 'cover'
                })
              }
            })
        }
        init();
      }
    }
  }
}());
