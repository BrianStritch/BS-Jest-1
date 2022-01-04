const addition = require('../calc');

describe('calculator', () => {
    describe('addition function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20,22)).toBe(42);
        });
        test('should return 60 for 50 + 10', () => {
            expect(addition(50,10)).toBe(60);
        });
    });
    describe('subtraction function', () => {

    });
    describe('multiply function', () => {

    });
    describe('division function', () => {

    });
});

