// Example of using enums in TypeScript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(`Move Direction: ${Direction[move]} (${move})`);

move = Direction.Left;
console.log(`Move Direction: ${Direction[move]} (${move})`);

// The following line would cause a TypeScript error because 5 is not a valid enum member.
// move = 5;

// String enums
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favoriteColor: Color = Color.Green;
console.log(`Favorite Color: ${favoriteColor}`);

// The following line would cause a TypeScript error because "YELLOW" is not a valid enum member.
// favoriteColor = "YELLOW";

// Heterogeneous enums
enum Status {
    Success = 1,
    Failure = "FAILURE"
}

let currentStatus: Status = Status.Success;
console.log(`Current Status: ${currentStatus}`);

currentStatus = Status.Failure;
console.log(`Current Status: ${currentStatus}`);

// The following line would cause a TypeScript error because 2 is not a valid enum member.
// currentStatus = 2;

// Using enums in functions
function getDirectionMessage(direction: Direction): string {
    switch (direction) {
        case Direction.Up:
            return "You are moving up!";
        case Direction.Down:
            return "You are moving down!";
        case Direction.Left:
            return "You are moving left!";
        case Direction.Right:
            return "You are moving right!";
        default:
            return "Unknown direction!";
    }
}

console.log(getDirectionMessage(Direction.Down));
console.log(getDirectionMessage(Direction.Right));

// The following line would cause a TypeScript error because 10 is not a valid enum member.
// console.log(getDirectionMessage(10));