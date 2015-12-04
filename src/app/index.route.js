(function() {
  'use strict';

  angular
    .module('notAshittyProductivityApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        // url: '/',
        // templateUrl: 'app/main/main.html',
        // controller: 'MainController',
        // controllerAs: 'main'
        //
        views: {
          "": {},
          "todosPanel"
        }
      })
      .state('home.todosPanel', {
        templateUrl: 'app/todos/todosPanel.html',
        controller: 'TodosPanelCtrl',
        controllerAs: 'tp'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
