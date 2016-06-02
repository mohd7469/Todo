
var app = angular.module('app',[]);

var todoArray = [
    {
      name: 'Eat',
      delete: false
    },
    {
      name: 'Drink',
      delete: false
    }
  ];

  app.factory('list', function () {
    return{
      add: add,
      delete: deleteItems,
      get: getList
    };
    function add (object) {
      todoArray.push(object);
    }
    function deleteItems (index) {
      todoArray.splice(index, 1)
    }
    function getList () {
      return todoArray;
    }
  });

  app.controller('mainController', function ($scope, list) {
    $scope.todoArray = list.get();
  });

  app.controller('listController', function ($scope, list) {
    $scope.add = function () {
            var object = {
              name: $scope.listValue,
              delete: false
            };
            list.add(object);
            $scope.listValue = '';
    };

    $scope.delete = function (index) {
      list.delete(index);
    };

    $scope.deleteSelected = function () {
      var items = list.get();
      console.log(items);
      for(var i = 0; i<items.length; i++) {
        if (items[i].delete == true) {
          console.log(items[i]);
          items.splice(i, 1);
          i--;
        }}
      };
    });
