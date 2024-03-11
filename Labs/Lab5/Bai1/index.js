// Define the Admin type
var Admin = {
    name: 'string',
    privileges: 'string[]'
};
// Define the Employee type
var Employee = {
    name: 'string',
    startDate: 'Date'
};
// Define the ElevatedEmployee type as a combination of Admin and Employee
var ElevatedEmployee = {
    name: 'string',
    privileges: 'string[]',
    startDate: 'Date'
};
