var departmentService = (function DepartmentService() {
    function GetRoles() {
        return ["Web Developer",
            "Solution Architect",
            "Project Leader"];
    }

    function GetDepartments() {
            return ["Department A",
                "Department B",
                "Department C"];
        }

    return {
        GetRoles: GetRoles,
        GetDepartments: GetDepartments
    }
});

export default { departmentService }