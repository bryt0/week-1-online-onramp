function noOfElements(x, y, z) {
  let countNumber = 0;
  let length = x.length;

  for (let i = 0; i < length; i++) {

    if (x[i] >= y && x[i] <= z) {
      countNumber++
    }
  }
  return countNumber;
}
module.exports = noOfElements

