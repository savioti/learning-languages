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

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    displayInfo(): void {
        console.log(`Product Name: ${this.name}, Price: $${this.price}`);
    }
}

function mixin<T extends new (...args: any[]) => {}>(Base: T) {
    return class extends Base {
        displayDetails(): void {
            if (this instanceof Car) {
                console.log(`Car Details - Brand: ${this.brand}, Color: ${this.color}, Weight: ${this.weight}kg, Max Speed: ${this.maxSpeed}km/h`);
            } else if (this instanceof Product) {
                console.log(`Product Details - Name: ${this.name}, Price: $${this.price}`);
            }
        }
    };
}

const MixedCar = mixin(Car);
const myMixedCar = new MixedCar(1500, 'blue', 'Honda', 200);
myMixedCar.accelerate();
myMixedCar.displayDetails();

const MixedProduct = mixin(Product);
const myMixedProduct = new MixedProduct('Laptop', 1200);
myMixedProduct.displayInfo();
myMixedProduct.displayDetails();