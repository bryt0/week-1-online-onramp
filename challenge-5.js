function replaceDivisible(x, y) {
  let newArray = [];
  for (const number of x) {
    if (number % y === 0) {
      newArray.push("isDivisible");
    } else {
      newArray.push(number);
    }
  }

  return newArray;
}
module.exports = replaceDivisible;
