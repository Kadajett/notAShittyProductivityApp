(function() {
  'use strict';

  angular.module('notAshittyProductivityApp')
    .controller('TodosPanelCtrl', todosCtrl);

    function todosCtrl($scope, Todos){
      var tp = this;
      tp.todoList = Todos.getTodos();
    }
}());
