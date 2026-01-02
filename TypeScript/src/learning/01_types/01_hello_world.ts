const personName = "Alice";

console.log(`Hello, ${personName}!`);

class System {
    ip: string;

    constructor(ip: string) {
        this.ip = ip;
    }
}

const server = new System("192.168.1.1");
console.log(`Server IP: ${server.ip}`);