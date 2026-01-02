const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
const subtractBtn = document.getElementById('subtractBtn') as HTMLButtonElement;
const multiplyBtn = document.getElementById('multiplyBtn') as HTMLButtonElement;
const divideBtn = document.getElementById('divideBtn') as HTMLButtonElement;
const resultDiv = document.getElementById('result') as HTMLDivElement;

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

function getInputValues(): { a: number; b: number } {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    return { a, b };
}

addBtn.addEventListener('click', () => {
    const { a, b } = getInputValues();
    const result = add(a, b);
    resultDiv.innerText = `Result: ${result}`;
});

subtractBtn.addEventListener('click', () => {
    const { a, b } = getInputValues();
    const result = subtract(a, b);
    resultDiv.innerText = `Result: ${result}`;
});

multiplyBtn.addEventListener('click', () => {
    const { a, b } = getInputValues();
    const result = multiply(a, b);
    resultDiv.innerText = `Result: ${result}`;
});

divideBtn.addEventListener('click', () => {
    const { a, b } = getInputValues();
    try {
        const result = divide(a, b);
        resultDiv.innerText = `Result: ${result}`;
    } catch (error) {
        resultDiv.innerText = `Error: ${(error as Error).message}`;
    }
});