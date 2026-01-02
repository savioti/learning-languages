interface Printable {
    text: string;
    pages: number;
    isPublic: boolean;
    print(): void;
}

interface AdvancedPrintable extends Printable {
    configs: string[];
    setConfigs(configs: string[]): void;
}

const advancedDocument: AdvancedPrintable = {
    text: "Hello, Advanced TypeScript!",
    pages: 10,
    isPublic: false,
    configs: ["double-sided", "color"],

    print() {
        console.log(this.text);
    },

    setConfigs(configs: string[]) {
        this.configs = configs;
    }
};

advancedDocument.print();
console.log(`Initial configs: ${advancedDocument.configs.join(", ")}`);