class Car {
    weight: number;
    color: string;
    brand: string;
    maxSpeed: number;

    constructor(weight: number, color: string, brand: string, maxSpeed: number) {
        this.weight = weight;
        this.color = color;
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }

    accelerate(): void {
        console.log(`${this.brand} is accelerating to its max speed of ${this.maxSpeed} km/h.`);
    }

    brake(): void {
        console.log(`${this.brand} is braking.`);
    }
}

const myCar = new Car(1500, 'red', 'Toyota', 220);
myCar.accelerate();
myCar.brake();