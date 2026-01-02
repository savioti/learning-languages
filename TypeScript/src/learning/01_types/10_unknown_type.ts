// Example of typing a variable as a unknown in TypeScript
let unknownValue: unknown;

unknownValue = "This is a string assigned to unknown type";
console.log(unknownValue);

unknownValue = 200; // Now assigning a number
console.log(unknownValue);

unknownValue = { key: "value" }; // Now assigning an object
console.log(unknownValue);