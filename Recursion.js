function getFactorials(num) {
  if (num === 1) return num;
  return num * getFactorials(num - 1);
}

function integersSum(num) {
  if (num === 1) return num;
  return num + integersSum(num - 1);
}

function countWhiteSpaces(str) {
  const index = str.indexOf(" ");
  if (index === -1) {
    return 0;
  } else {
    return 1 + countWhiteSpaces(str.substr(index + 1));
  }
}

function findPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) return false;

  const shorterStr = str.slice(1, -1);

  return findPalindrome(shorterStr);
}

function toSingleNumber(num) {
  const numArr = Array.from(num.toString());

  if (num.toString().length === 1) return num;

  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }

  return toSingleNumber(sum);
}

function deepFreeze(obj) {
  for (let i in obj) {
    if (typeof obj[i] === "object" && obj[i] !== null) {
      deepFreeze(Object.freeze(obj[i]));
    }
  }

  return Object.freeze(obj);
}

module.exports = {
  getFactorials,
  integersSum,
  countWhiteSpaces,
  findPalindrome,
  toSingleNumber,
  deepFreeze
};
