// Type inference allows TypeScript to automatically deduce the type of a variable based on its initial value.
let stringValue = "This is a string";

console.log(stringValue);

// TypeScript shows an error if you try to assign a value of a different type.
// stringValue = 150;


let numberList = [10, 20, 30];

console.log(numberList);

// Error: Type 'string' is not assignable to type 'number'
// numberList.push("forty");