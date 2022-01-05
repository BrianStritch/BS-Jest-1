const addition = require('../calc');
// const subtraction = require('../calc');
// const multiply = require('../calc');
// const division = require('../calc');


describe('calculator', () => {
    describe('addition function', () => {
        test('should return 42 for 20 + 22', () => {  // this test checks for a reult of 42 when 20 and 22 are passed as parameters
            expect(addition(20,22)).toBe(42);
        });
        test('should return 60 for 50 + 10', () => {  // this test checks for a reult of 60 when 50 and 10 are passed as parameters
            expect(addition(50,10)).toBe(60);
        });
    });
    // describe('subtraction function', () => {
    //     test('should return 2 for 22 - 20', () => {  // this test checks for a reult of 2 when 22 and 20 are passed as parameters
    //         expect(subtraction(22,20)).toBe(2);
    //     });
    //     test('should return 5 for 10 - 5', () => {  // this test checks for a reult of 5 when 10 and 5 are passed as parameters
    //         expect(subtraction(10,5)).toBe(5);
    //     });
    // });
    // describe('multiply function', () => {
    //     test('should return 20 for 4 * 5', () => {  // this test checks for a reult of 20 when 4 and 5 are passed as parameters
    //         expect(multiply(4,5)).toBe(20);
    //     });
    //     test('should return 30 for 3 * 10', () => {  // this test checks for a reult of 30 when 3 and 10 are passed as parameters
    //         expect(multiply(3,10)).toBe(30);
    //     });
    // });
    // describe('division function', () => {
    //     test('should return 5 for 20 / 4', () => {  // this test checks for a reult of 5 when 20 and 4 are passed as parameters
    //         expect(division(20,4)).toBe(5);
    //     });
    //     test('should return 10 for 50 / 5', () => {  // this test checks for a reult of 10 when 50 and 5 are passed as parameters
    //         expect(division(50,5)).toBe(10);
    //     });
    // });
});


