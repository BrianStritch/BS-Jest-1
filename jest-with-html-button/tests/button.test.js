
   
/**
 * @jest-environment jsdom
 */

const buttonClick = require("../script");

beforeAll(() => {  // does not take any arguements or parameters and this sets what the initial value is before any changes are made
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
});