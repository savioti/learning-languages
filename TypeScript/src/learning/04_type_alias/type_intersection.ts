// example of type intersection in typescript

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

// Type intersection of Person and Employee
type StaffMember = Person & Employee;

const staffMember: StaffMember = {
    name: "Alice",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};

function getStaffInfo(staff: StaffMember): string {
    return `Name: ${staff.name}, Age: ${staff.age}, Employee ID: ${staff.employeeId}, Department: ${staff.department}`;
}

console.log(getStaffInfo(staffMember));