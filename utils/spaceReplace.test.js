import { spaceReplace } from "./spaceReplace";
import { expect } from "@jest/globals";

/*Question 2
Write code that tests the function in src/utilities/spaceReplace.js */

test("replace string works", function() {
    expect(spaceReplace("Hello, how are you today?")).toMatch("-")
})
