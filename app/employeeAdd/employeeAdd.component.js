angular.module('employeeAddModule').component('employeeAdd', {
        templateUrl: 'employeeAdd/employeeAdd-template.html',
        require: {editor: '^employeeManagement'},
      })