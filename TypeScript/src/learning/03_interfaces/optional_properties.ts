interface Printable {
    text: string;
    pages?: number;
    isPublic?: boolean;
    print(): void;
}

const document: Printable = {
    text: "Hello, TypeScript!",
    print() {
        console.log(this.text);
    }
};

document.print();
