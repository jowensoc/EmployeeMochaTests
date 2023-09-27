let assert = chai.assert;
import employeeService from "../src/public/scripts/EmployeeService.js";

describe('Employees Service', function () {
  describe('Employees', function () {
    it('should return a list of employees', function () {
        let listOfEmployees = employeeService.employeeService().GetEmployees();

        assert(listOfEmployees !== null);
        assert.ok(listOfEmployees.length > 0);
    });

    it('should return a list of roles', function () {
          let listOfRoles = employeeService.employeeService().GetRoles();

          assert(listOfRoles !== null);
          assert.ok(listOfRoles.length > 0);
    });

    it('should return a list of departments', function () {
          let listOfDepartments = employeeService.employeeService().GetDepartments();

          assert(listOfDepartments !== null);
          assert.ok(listOfDepartments.length > 0);
    });

    it('has "Project Leader" among the roles', function () {
      let listOfRoles = employeeService.employeeService().GetRoles();

      assert.ok(listOfRoles.indexOf("Project Leader") >= 0);
    });
  });
});