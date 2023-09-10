import { add, multiply } from '../src/main';

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

