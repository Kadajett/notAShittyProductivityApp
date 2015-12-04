(function() {
  'use strict';

  angular.module('notAshittyProductivityApp')
    .factory('Auth', auth);

    function auth($firebaseObject){
      function init(){
        angular.extend(api, {
          tokens: __api.authRef,
          user: __api.userRef
        })

      }
      var api = {

      };

      var __api = {
        authRef: new Firebase("https://notashittyapp.firebaseio.com/appData"),
        userRef: new Firebase("https://notashittyapp.firebaseio.com/users/0")
      };

      init();
      return api;
    }
}());
