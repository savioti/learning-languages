interface Printable {
    text: string;
    pages: number;
    isPublic: boolean;
    print(): void;
}

const document: Printable = {
    text: "Hello, TypeScript!",
    pages: 5,
    isPublic: true,
    print() {
        console.log(this.text);
    }
};

document.print();

function printDocumentPages({pages}: Printable): void {
    console.log(`The document has ${pages} pages.`);
}

printDocumentPages(document);