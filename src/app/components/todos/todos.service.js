(function() {
  'use strict';

  angular.module('notAshittyProductivityApp')
    .Factory('Todos', todos);

    function todos(Auth, $firebaseArray){
      var api = {
        newTodo: newTodo,
        getTodos: getTodos
      };

      function getTodos(){
        return $firebaseArray(__api.todoRef);
      }

      function newTodo(todo){
        $firebaseArray(__api.todoRef).$add(generateTodo(todo));
      }



      var __api = {
        generateTodo: generateTodo,
        todoRef: new Firebase("https://notashittyapp.firebaseio.com/users/0/tasks")
      };

      function generateTodo(todo){
        var newTodo = {
          completed: todo.completed,
          createdAt: new Date().getTime(),
          description: todo.description,
          lastUpdated: new Date().getTime(),
          priority: todo.priority,
          tags: todo.tags,
          title: todo.title
        };

        return newTodo;
      }

      return api;
    }
}());
