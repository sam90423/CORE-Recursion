const { expect } = require("chai");
const {
  getFactorials,
  integersSum,
  countWhiteSpaces,
  findPalindrome,
  toSingleNumber
} = require("../Recursion");

describe("getFactorials", () => {
  it("test if the base case works", () => {
    expect(getFactorials(1)).to.eql(1);
  });
  it("test if the base case works  multiple numbers", () => {
    expect(getFactorials(3)).to.eql(6);
    expect(getFactorials(4)).to.equal(24);
    expect(getFactorials(5)).to.equal(120);
  });
});

describe("integersSum", () => {
  it("test if the base case works", () => {
    expect(integersSum(1)).to.equal(1);
  });
  it("test if stops at the base case", () => {
    expect(integersSum(3)).to.equal(6);
    expect(integersSum(4)).to.equal(10);
    expect(integersSum(5)).to.equal(15);
  });
});

describe("countWhiteSpaces", () => {
  it("test if the base case works", () => {
    expect(countWhiteSpaces("a")).to.equal(0);
    expect(countWhiteSpaces("")).to.equal(0);
  });
  it("count white space", () => {
    expect(countWhiteSpaces("a a ")).to.equal(2);
    expect(countWhiteSpaces(" ")).to.equal(1);
    expect(countWhiteSpaces("a a a a")).to.equal(3);
  });
});

describe("findPalindrome", () => {
  it("test base case", () => {
    expect(findPalindrome("a")).to.equal(true);
  });
  it("test non-palindrome", () => {
    expect(findPalindrome("ab")).to.equal(false);
  });
  it("works recursively", () => {
    expect(findPalindrome("abba")).to.equal(true);
    expect(findPalindrome("abca")).to.equal(false);
    expect(findPalindrome("amanaplanacanalpanama")).to.equal(true);
  });
});

describe("toSingleNumber", () => {
  it("return single number", () => {
    expect(toSingleNumber(1)).to.equal(1);
  });
  it("sum of two number", () => {
    expect(toSingleNumber(11)).to.equal(2);
  });
  it("sum of mulitple numbers", () => {
    expect(toSingleNumber(12345)).to.equal(6);
    expect(toSingleNumber(123456)).to.equal(3);
    expect(toSingleNumber(1234567)).to.equal(1);
  });
});
