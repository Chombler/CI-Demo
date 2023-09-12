import * from Math;
// This file contains the secret functions that you need to implement.
// In no particular order, they are:
// - Exponent -
// - Factorial -
// - Fibonacci
// - Modulus -
// - Square root -

// Implements the following input to output mapping:
// 1, 2 -> 1
// 3, 4 -> 3
// 5, 2 -> 1
// 7, 4 -> 3
// All inputs must be >= 1
export function secret_1(num1: number, num2: number): number {
    return num1 % num2;
}

// Implements the following input to output mapping:
// 1, 2 -> 1
// 3, 4 -> 81
// 5, 2 -> 25
// 7, 4 -> 2401
// All inputs must be >= 1
export function secret_2(num1: number, num2: number): number {
    return Math.pow(num1, num2);
}

// Implements the following input to output mapping:
// 1 -> 1
// 4 -> 2
// 9 -> 3
// 256 -> 16
// All inputs must be >= 0
export function secret_3(num1: number): number {
    return Math.sqrt(num1);
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 6
// 5 -> 120
// 7 -> 5040
// All inputs must be >= 0
export function secret_4(num1: number): number {
    let fact = 1;
    for (let i = 1; i <= num1; i++) {
        fact = fact * i;
    }
    return fact;
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 2
// 5 -> 5
// 7 -> 13
// All inputs must be >= 1
export function secret_5(num1: number): number {
    let fib = 0;
    let fibnext = 1;
    for(let i = 0; i <= num; i++){
        fib = fib + fibnext;
        fibnext = fib + fibnext;
    }
    return fib;
}
