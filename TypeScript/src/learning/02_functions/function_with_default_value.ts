function login(username: string = "admin", password: string = "admin123"): void {
    console.log(`Username: ${username}, Password: ${password}`);
}

login();
login("user1", "pass1")