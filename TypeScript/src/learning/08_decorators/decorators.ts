// Learning decorators in TypeScript

// A simple class decorator that logs the creation of a class
function LogClass(target: Function) {
    console.log(`Class ${target.name} has been created.`);
}

// A property decorator that logs property access
function LogProperty(target: Object, propertyKey: string) {
    const privateKey = Symbol(propertyKey);

    Object.defineProperty(target, propertyKey, {
        get(this: Record<symbol, unknown>) {
            const value = this[privateKey];
            console.log(`Getting value of ${propertyKey}: ${value}`);
            return value;
        },
        set(this: Record<symbol, unknown>, newVal: unknown) {
            console.log(`Setting value of ${propertyKey} to: ${newVal}`);
            this[privateKey] = newVal;
        },
        enumerable: true,
        configurable: true,
    });
}

// A method decorator that logs method calls
function LogMethod(
    _target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} called with args: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

@LogClass
class Example {
    @LogProperty
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    @LogMethod
    greet(greeting: string) {
        return `${greeting}, ${this.name}!`;
    }
}

const example = new Example('TypeScript');
example.name = 'Decorators';
console.log(example.greet('Hello'));