class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Mammal extends Animal {
    hasFur: boolean;

    constructor(name: string, hasFur: boolean) {
        super(name);
        this.hasFur = hasFur;
    }
}

class Dog extends Mammal {
    breed: string;

    constructor(name: string, hasFur: boolean, breed: string) {
        super(name, hasFur);
        this.breed = breed;
    }
}

const myDog = new Dog('Buddy', true, 'Golden Retriever');
console.log(`My dog's name is ${myDog.name}, it is a ${myDog.breed}, and it ${myDog.hasFur ? 'has' : 'does not have'} fur.`);