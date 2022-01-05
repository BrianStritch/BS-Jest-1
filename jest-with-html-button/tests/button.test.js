
   
/**
 * @jest-environment jsdom
 */

const buttonClick = require("../script");

beforeAll(() => {  // does not take any arguements or parameters and this sets what the initial value is before any changes are made
    // document.body.innerHTML = "<p id='par'></p>"; // this tests one component on the DOM
    let fs = require('fs');     //    the following 5 lines can be seen as boilerplate code and dont need to be changed each time
    let fileContents = fs.readFileSync('button.html', 'UTF-8');
    document.open();
    document.write(fileContents);
    document.close();         // down to here (boilerplate)
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
});