import { add, subtract, multiply, divide } from '../src/main';
import { secret_1, secret_2, secret_3, secret_4, secret_5 } from '../src/secret';

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toEqual(3);
    });
});

describe('multiply', () => {
    it('should multiply two numbers', () => {
        expect(multiply(1, 2)).toEqual(2);
    });
});

describe('subtract', () => {
    it('should subtract two numbers', () => {
        expect(subtract(1, 2)).toEqual(-1);
    });
});

describe('divide', () => {
    it('should divide two numbers', () => {
        expect(divide(1, 2)).toEqual(0.5);
    });
});

describe('secret_1', () => {
    it('should result in 1, 2 -> 1', () => {
        expect(secret_1(1, 2)).toEqual(1);
    });

    it('should result in 3, 4 -> 3', () => {
        expect(secret_1(3, 4)).toEqual(3);
    });

    it('should result in 5, 2 -> 1', () => {
        expect(secret_1(5, 2)).toEqual(1);
    });

    it('should result in 7, 4 -> 3', () => {
        expect(secret_1(7, 4)).toEqual(3);
    });
});

describe('secret_2', () => {
    it('should result in 1, 2 -> 1', () => {
        expect(secret_2(1, 2)).toEqual(1);
    });

    it('should result in 3, 4 -> 81', () => {
        expect(secret_2(3, 4)).toEqual(81);
    });

    it('should result in 5, 2 -> 25', () => {
        expect(secret_2(5, 2)).toEqual(25);
    });

    it('should result in 7, 4 -> 2401', () => {
        expect(secret_2(7, 4)).toEqual(2401);
    });
});

describe('secret_3', () => {
    it('should result in 1 -> 1', () => {
        expect(secret_3(1)).toEqual(1);
    });

    it('should result in 4 -> 2', () => {
        expect(secret_3(4)).toEqual(2);
    });

    it('should result in 9 -> 3', () => {
        expect(secret_3(9)).toEqual(3);
    });

    it('should result in 256 -> 16', () => {
        expect(secret_3(256)).toEqual(16);
    });
});

describe('secret_4', () => {
    it('should result in 1 -> 1', () => {
        expect(secret_4(1)).toEqual(1);
    });

    it('should result in 3 -> 6', () => {
        expect(secret_4(3)).toEqual(6);
    });

    it('should result in 5 -> 120', () => {
        expect(secret_4(5)).toEqual(120);
    });

    it('should result in 7 -> 5040', () => {
        expect(secret_4(7)).toEqual(5040);
    });
});

describe('secret_5', () => {
    it('should result in 1 -> 1', () => {
        expect(secret_5(1)).toEqual(1);
    });

    it('should result in 3 -> 2', () => {
        expect(secret_5(3)).toEqual(2);
    });

    it('should result in 5 -> 5', () => {
        expect(secret_5(5)).toEqual(5);
    });

    it('should result in 7 -> 13', () => {
        expect(secret_5(7)).toEqual(13);
    });
});
