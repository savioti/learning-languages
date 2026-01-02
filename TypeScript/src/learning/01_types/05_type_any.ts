// Example of typing a variable as Any in TypeScript
let anyValue: any;

anyValue = "This is a string assigned to any type";
console.log(anyValue);

anyValue = 100; // Now assigning a number
console.log(anyValue);

anyValue = { key: "value" }; // Now assigning an object
console.log(anyValue);

// Using 'any' in an array
let mixedList: any[] = [];
mixedList.push("A string");
mixedList.push(42);
mixedList.push({ name: "TypeScript" });

console.log(mixedList);

// Using 'any' in a function
function logAnyValue(value: any): void {
    console.log(`Logging value: ${value}`);
}

logAnyValue("Hello, World!");
logAnyValue(2024);
logAnyValue([1, 2, 3]);