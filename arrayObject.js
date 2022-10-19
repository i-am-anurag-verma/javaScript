let employees_data = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
];
for (let object of employees_data) {
    if (object.employee_id === 1) {
        object.employee_name = "Anthony";
    }
}
console.log("Updated Data: ");
console.log(employees_data);