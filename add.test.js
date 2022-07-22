var utils  = require('course-utilities');
var testplus = utils.load('./addfolder/add.js', 'plus')
describe("testing the add function", () => {

it("does plus add correctly", () => {
expect(testplus(1,3)).toBe(4);
})
it("correct wording", () => {
    expect(testplus("Java","Script")).toBe("JavaScript");
    }); 
})