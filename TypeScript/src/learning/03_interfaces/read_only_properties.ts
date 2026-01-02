interface Printable {
    text: string;
    pages: number;
    readonly isPublic: boolean;
    print(): void;
}

const publicDocument : Printable = {
    text: "Hello, TypeScript!",
    pages: 5,
    isPublic: true,
    print() {
        console.log(this.text);
    }
};

publicDocument.print();

// Error: Cannot assign to 'isPublic' because it is a read-only property.
// publicDocument.isPublic = false;