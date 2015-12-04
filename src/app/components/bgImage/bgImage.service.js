(function() {
  'use strict';

  angular.module('notAshittyProductivityApp')
    .factory('BgImage', bgImage);

  function bgImage($http, $q, $log, Auth) {
    var api = {
      getBgImage: getBgImage,
      setDefaultImage: setDefaultImage
    };

    function getBgImage(){
      var defer = $q.defer();
      if(Auth.user.bgImage){
        defer.resolve(Auth.user.bgImage);
      } else {
        getRandomImage()
          .then(function(res){
            defer.resolve(res);
          }, function(err){
            defer.reject(err);
          });
      }
      return defer.promise;
    }

    function setDefaultImage(url){
      Auth.user.bgImage = url;
    }

    function getRandomImage() {
      var defer = $q.defer();

      $http({
          method: 'GET',
          url: 'http://localhost:3000/media/images/random'
        })
        .success(function(res){
          defer.resolve(res);
        })
        .error(function(err){
          defer.reject(err);
        })

      return defer.promise;
    }

    function getRandomImages() {

    }

    return api;
  }
}());
// https://splashbase.s3.amazonaws.com/snapwiresnaps/regular/tumblr_nk8p7lqt9M1teue7jo1_1280.jpg
