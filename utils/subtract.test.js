import { expect } from "@jest/globals";
import subtract from "./subtract.js";


/**Question 1
Write code that tests the function in src/utilities/subtract.js**/

test("subtraction function works", function() {
    expect(subtract(20 - 10)).toBe(10)
})