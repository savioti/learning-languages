// Example of using type object in TypeScript
let user: { name: string; age: number };

user = { name: "Alice", age: 30 };
console.log(`User Name: ${user.name}, Age: ${user.age}`);

// The following line would cause a TypeScript error because age should be a number.
// user = { name: "Bob", age: "thirty" };

// Declaring an array of objects
let users: { name: string; age: number }[] = [
    { name: "Charlie", age: 25 },
    { name: "Diana", age: 28 }
];

users.forEach(u => {
    console.log(`User Name: ${u.name}, Age: ${u.age}`);
});

// The following line would cause a TypeScript error because the object structure does not match.
// users.push({ name: "Eve", age: "twenty-two" });

// Declaring a class with typed properties
class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    displayInfo(): void {
        console.log(`Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`);
    }
}

const product = new Product(1, "Laptop", 999.99);
product.displayInfo();

// The following line would cause a TypeScript error because price should be a number.
// product.price = "one thousand";