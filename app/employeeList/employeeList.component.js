angular.module('employeeListModule').component('employeeList', {
        templateUrl: 'employeeList/employeeList-template.html',
        require: {editor: '^employeeManagement'}
      })