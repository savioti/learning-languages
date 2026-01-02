type UUID = string;

function login(userId: UUID): void {
    console.log(`User with ID: ${userId} has logged in.`);
}

function logout(userId: UUID): void {
    console.log(`User with ID: ${userId} has logged out.`);
}

const userId: UUID = "123e4567-e89b-12d3-a456-426614174000";

login(userId);
logout(userId);


type currency = "USD" | "EUR" | "GBP";

function formatPrice(amount: number, curr: currency): string {
    return `${curr} ${amount.toFixed(2)}`;
}

console.log(formatPrice(99.99, "USD"));
console.log(formatPrice(85.50, "EUR"));
console.log(formatPrice(75.00, "GBP"));
// The following line would cause a TypeScript error due to invalid currency
// console.log(formatPrice(50.00, "JPY"));