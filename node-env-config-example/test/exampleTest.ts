import { expect } from "chai";
import { promisify } from "util";

/* For more information on how to write tests visit:
    https://mochajs.org/ for mocha and
    https://www.chaijs.com/api/ for chai.
    Be aware that you can use async/await in the tests instead of using mochas callbacks like in the third example test */

it("should display a test was available", () => {
    console.log("a test is available");
});

it("should add 1+1 and check if it's 2", () => {
    const two = 1 + 1;
    expect(two).to.equal(2);
});
