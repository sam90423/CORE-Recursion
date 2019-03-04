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
  /*if (str.length === 1 || str === "") return 0;
  return 1 + countWhiteSpaces(str.slice(" ").length - 1);*/
}

module.exports = { getFactorials, integersSum, countWhiteSpaces };
