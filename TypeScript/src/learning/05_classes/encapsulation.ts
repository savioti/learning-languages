class User {
    public name: string;
    public email: string;
    private readonly birthDate: Date;
    private gender: string;

    constructor(name: string, email: string, birthDate: Date, gender: string) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.gender = gender;
    }

    public getAge(currentDate: Date): number {
        let age = currentDate.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - this.birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(gender: string): void {
        this.gender = gender;
    }
}

const user = new User('Alice', 'email@email.com', new Date('1990-05-15'), 'female');
console.log(user.name); // Accessible
console.log(user.email); // Accessible
// console.log(user.birthDate); // Error: Property 'birthDate' is private and only accessible within class 'User'.
// user.birthDate = new Date('1990-05-15'); // Error: Cannot assign to 'birthDate' because it is a read-only property.
// console.log(user.gender); // Error: Property 'gender' is private and only accessible within class 'User'.
console.log(`User's age is: ${user.getAge(new Date())}`);
