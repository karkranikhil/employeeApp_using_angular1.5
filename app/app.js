angular.module('myApp', ['ngRoute','employeeManagementModule','employeeListModule','employeeAddModule','employeeEditModule','employeeDeleteModule'])
      .config(function($routeProvider) {
        $routeProvider.when('/list', {template: '<employee-list></employee-list>'});
        $routeProvider.when('/add', {template: '<employee-add></employee-add>'});
        $routeProvider.when('/edit/:id', {template: '<employee-edit></employee-edit>'});
        $routeProvider.when('/delete/:id', {template: '<employee-delete></employee-delete>'});
        $routeProvider.otherwise({redirectTo: '/list'});
      })