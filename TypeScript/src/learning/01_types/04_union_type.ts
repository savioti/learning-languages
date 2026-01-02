// Example of a union type in TypeScript
let userId: string | number;

userId = "user_123";
console.log(`User ID as string: ${userId}`);

userId = 456;
console.log(`User ID as number: ${userId}`);

// The following line would cause a TypeScript error because boolean is not part of the union type.
// userId = true;