// This file contains the secret functions that you need to implement.
// In no particular order, they are:
// - Exponent
// - Factorial
// - Fibonacci
// - Modulus
// - Square root

// Implements the following input to output mapping:
// 1, 2 -> 1
// 3, 4 -> 3
// 5, 2 -> 1
// 7, 4 -> 3
// All inputs must be >= 1
export function secret_1(num1: number, num2: number): number {
    let mod = num1 % num2;
    return mod;
}

// Implements the following input to output mapping:
// 1, 2 -> 1
// 3, 4 -> 81
// 5, 2 -> 25
// 7, 4 -> 2401
// All inputs must be >= 1
export function secret_2(num1: number, num2: number): number {
    let exp = num1 ** num2;
    return exp;
}

// Implements the following input to output mapping:
// 1 -> 1
// 4 -> 2
// 9 -> 3
// 256 -> 16
// All inputs must be >= 0
export function secret_3(num1: number): number {
    let square = Math.sqrt(num1);
    return square;
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 6
// 5 -> 120
// 7 -> 5040
// All inputs must be >= 0
export function secret_4(num1: number): number {
    factorial(num1);
    return 0;
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 2
// 5 -> 5
// 7 -> 13
// All inputs must be >= 1
export function secret_5(num1: number): number {
    fibonacci(num1);
    return 0;
}

function factorial(n: number): number {
    if(n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

function fibonacci(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}
