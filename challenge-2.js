function divisible(a) {
  let countNumber = 0;
  let length = a.length;

  for (let i = 0; i < length; i++) {
    if (a[i] > 15 && a[i] % 2 === 0) {
      countNumber++;
    }
  }
  return countNumber;
}

module.exports = divisible;
