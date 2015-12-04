(function() {
  'use strict';

  angular
    .module('notAshittyProductivityApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('todosPage@home', {
        url: '/todos',
        templateUrl: 'app/todos/todosPage.html',
        controller: 'TodosPageCtrl',
        controllerAs: 'tp'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
