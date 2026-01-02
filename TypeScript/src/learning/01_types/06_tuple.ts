// Example of typing a variable as a Tuple in TypeScript
let tupleValue: [string, number];

tupleValue = ["Age", 30]; // Correct assignment
console.log(tupleValue);

// Error: Type '[number, string]' is not assignable to type '[string, number]'
// tupleValue = [30, "Age"];

// Accessing tuple elements
let name: string = tupleValue[0];
let age: number = tupleValue[1];

console.log(`Field: ${name}, Value: ${age}`);

// Error: Type 'boolean' is not assignable to type 'string | number'
// tupleValue[0] = true;

// Using tuple in a function
function displayTupleInfo(info: [string, number]): void {
    console.log(`Info - ${info[0]}: ${info[1]}`);
}

displayTupleInfo(["Height", 180]);
// Error: Argument of type '[number, string]' is not assignable to parameter of type '[string, number]'
// displayTupleInfo([180, "Height"]);