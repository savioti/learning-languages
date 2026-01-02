function calculateTotal(...values: number[]): number {
 return values.reduce((total, num) => total + num, 0);
}

console.log(`Total: ${calculateTotal(10, 20, 30, 40)}`);