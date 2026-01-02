// Example of typing a variable as null in TypeScript
let nullableValue: string | null;

nullableValue = "This is a valid string";
console.log(nullableValue);

// Assigning null to the variable
nullableValue = null;
console.log(nullableValue);

// The following line would cause a TypeScript error because the variable is of type string | null.
// nullableValue = 42;

// Example of typing a variable as undefined in TypeScript
let undefinedValue: number | undefined;

undefinedValue = 100;
console.log(undefinedValue);

// Assigning undefined to the variable
undefinedValue = undefined;
console.log(undefinedValue);

// The following line would cause a TypeScript error because the variable is of type number | undefined.
// undefinedValue = "Not a number";