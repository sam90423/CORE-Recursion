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
  let firstNum = Number(num.toString()[0]);
  let lastNum = Number(num.toString()[1]);

  if (Number.isNaN(lastNum)) return firstNum;

  sum = firstNum + lastNum;

  return sum;
}

module.exports = {
  getFactorials,
  integersSum,
  countWhiteSpaces,
  findPalindrome,
  toSingleNumber
};
