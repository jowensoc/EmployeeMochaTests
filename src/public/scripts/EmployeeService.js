import departmentService from "./DepartmentService.js";

var employeeService = (function EmployeeService() {
    function GetEmployees() {
        return ["Jack Torrance",
            "Carrie White",
            "Randall Flagg",
            "Anne Wilkes"];
    }

    function GetRoles() {
        return departmentService.departmentService().GetRoles();
    }

    function GetDepartments() {
            return departmentService.departmentService().GetDepartments();
        }

    return {
        GetEmployees: GetEmployees,
        GetRoles: GetRoles,
        GetDepartments: GetDepartments
    }
});

export default { employeeService }