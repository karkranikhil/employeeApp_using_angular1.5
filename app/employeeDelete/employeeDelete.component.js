angular.module('employeeDeleteModule').component('employeeDelete', {
        templateUrl: 'employeeDelete/employeeDelete-template.html',
        require: {editor: '^employeeManagement'},
        controller: function($routeParams) {
          this.id = $routeParams.id;
        }
      });