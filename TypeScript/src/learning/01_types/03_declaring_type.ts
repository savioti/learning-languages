// Declaring a variable with a specific type
let stringValue: string;

stringValue = "This is a string";

console.log(stringValue);

// The following line would cause a TypeScript error because stringValue is declared as a string.
// stringValue = 150;

let numberValue: number = 42;

console.log(numberValue);

// The following line would cause a TypeScript error because numberValue is declared as a number.
// numberValue = "forty-two";

// Declaring an array of numbers
let numberList: number[] = [10, 20, 30];

console.log(numberList);

// The following line would cause a TypeScript error because numberList is an array of numbers.
// numberList.push("forty");

// Declaring a class with typed properties
class System {
    ip: string;

    constructor(ip: string) {
        this.ip = ip;
    }
}

const server = new System("192.168.1.1");
console.log(`Server IP: ${server.ip}`);

// The following line would cause a TypeScript error because ip is declared as a string.
// server.ip = 12345;