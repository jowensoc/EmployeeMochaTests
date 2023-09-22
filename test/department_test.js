let assert = chai.assert;
import departmentService from "../src/public/scripts/DepartmentService.js";

describe('Departments Service', function () {
  describe('Departments', function () {
    it('should return a list of departments', function () {
              let listOfDepartments = departmentService.departmentService().GetDepartments();

              assert(listOfDepartments !== null);
              assert.ok(listOfDepartments.length > 0);
    });
  });

  describe('Roles', function () {
      it('should return a list of roles', function () {
                let listOfRoles = departmentService.departmentService().GetRoles();

                assert(listOfRoles !== null);
                assert.ok(listOfRoles.length > 0);
      });
    });
});
