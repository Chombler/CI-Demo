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
export function secret_1(_num1: number, _num2: number): number {
    return _num1 % _num2;
}

// Implements the following input to output mapping:
// 1, 2 -> 1
// 3, 4 -> 81
// 5, 2 -> 25
// 7, 4 -> 2401
// All inputs must be >= 1
export function secret_2(_num1: number, _num2: number): number {
    return Math.pow(_num1, _num2);
}

// Implements the following input to output mapping:
// 1 -> 1
// 4 -> 2
// 9 -> 3
// 256 -> 16
// All inputs must be >= 0
export function secret_3(_num1: number): number {
    return Math.sqrt(_num1);
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 6
// 5 -> 120
// 7 -> 5040
// All inputs must be >= 0
export function secret_4(_num1: number): number {
    let out = 1;
    for(let i = _num1; i > 1; i--) {
        out *= i;
    }
    return out;
}

// Implements the following input to output mapping:
// 1 -> 1
// 3 -> 2
// 5 -> 5
// 7 -> 13
// All inputs must be >= 1
export function secret_5(_num1: number): number {
    let n = _num1;
    if (n <= 0) {
        throw new Error("Input must be a positive integer");
      }
    
      if (n === 1 || n === 2) {
        return 1;
      }
    
      let prev = 1;
      let current = 1;
    
      for (let i = 3; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
      }
    
      return current;
}
