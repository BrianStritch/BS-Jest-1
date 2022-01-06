
/**
 * @jest-environment jsdom
 */

/**
 * 
 * use npm init to initialise jest when a new repo is created,
 * and press enter all the way until 'testing commmand' and set 'jest' as the testing command'
 * create your tests folder and your 'filename'.test.js file filename being whatever your filename is,
 * now you can use 'npm install jest --save-dev to install jest,
 * once its installed you use npm test in the console to run teh tests.
 */



//const addition = require('../calc'); // this would be format for testing one item/function only
const {addition, subtraction, division, multiply} = require('../calc'); // this would be format for testing more than one item/function

/**
 * the before all adds mock values pretending that they are the values in the dom for testing purposes
 */

beforeAll(() => {  // does not take any arguements or parameters and this sets what the initial value is before any changes are made
    // document.body.innerHTML = "<p id='par'></p>"; // this tests one component on the DOM
    let fs = require('fs');     //    the following 5 lines can be seen as boilerplate code and dont need to be changed each time
    let fileContents = fs.readFileSync('button.html', 'UTF-8'); // the first value will be the html page you wish to add
    document.open();
    document.write(fileContents);
    document.close();         // down to here (boilerplate)
});

describe('calculator', () => {
    describe('addition function', () => {
        test('should return 42 for 20 + 22', () => {  // this test checks for a reult of 42 when 20 and 22 are passed as parameters
            expect(addition(20,22)).toBe(42);
        });
        test('should return 60 for 50 + 10', () => {  // this test checks for a reult of 60 when 50 and 10 are passed as parameters
            expect(addition(50,10)).toBe(60);
        });
    });
    describe('subtraction function', () => {
        test('should return 2 for 22 - 20', () => {  // this test checks for a reult of 2 when 22 and 20 are passed as parameters
            expect(subtraction(22,20)).toBe(2);
        });
        test('should return 5 for 10 - 5', () => {  // this test checks for a reult of 5 when 10 and 5 are passed as parameters
            expect(subtraction(10,5)).toBe(5);
        });
    });
    describe('multiply function', () => {
        test('should return 20 for 4 * 5', () => {  // this test checks for a reult of 20 when 4 and 5 are passed as parameters
            expect(multiply(4,5)).toBe(20);
        });
        test('should return 30 for 3 * 10', () => {  // this test checks for a reult of 30 when 3 and 10 are passed as parameters
            expect(multiply(3,10)).toBe(30);
        });
    });
    describe('division function', () => {
        test('should return 5 for 20 / 4', () => {  // this test checks for a reult of 5 when 20 and 4 are passed as parameters
            expect(division(20,4)).toBe(5);
        });
        test('should return 10 for 50 / 5', () => {  // this test checks for a reult of 10 when 50 and 5 are passed as parameters
            expect(division(50,5)).toBe(10);
        });
    });
});


