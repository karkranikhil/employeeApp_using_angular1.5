angular.module('employeeEditModule')  .component('employeeEdit', {
        templateUrl: 'employeeEdit/employeeEdit-template.html',
        require: {editor: '^employeeManagement'},
        controller: function($routeParams) {
          this.id = $routeParams.id;
        }
      })