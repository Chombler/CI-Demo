// Add
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Subtract
function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

// Multiply
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

// Divide
function divide(num1: number, num2: number): number {
    return num1 / num2;
}

// Modulus
function modulus(num1: number, num2: number): number {
    return num1 % num2;
}

// Exponent
function exponent(num1: number, num2: number): number {
    return Math.pow(num1, num2);
}

// Square Root
function squareRoot(num1: number): number {
    return Math.sqrt(num1);
}

// Factorial
function factorial(num1: number): number {
    let result = 1;
    for (let i = 1; i <= num1; i++) {
        result *= i;
    }
    return result;
}

// Fibonacci
function fibonacci(num1: number): number {
    let result = 0;
    let prevNum = 1;
    let nextNum = 1;
    for (let i = 0; i < num1; i++) {
        result = prevNum;
        prevNum = nextNum;
        nextNum = result + prevNum;
    }
    return result;
}