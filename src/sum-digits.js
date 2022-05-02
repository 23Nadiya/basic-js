const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  if (num < 0) {
    return "Введите положительное число.";
  } else if (num < 10) {
    return num;
  }
  let str = String(num);

  const numSum = (newStr) => {
    let sum = 0;
    for (let i = 0; i < newStr.length; i += 1) {
      sum = sum + Number(newStr[i]);
    }

    if (sum < 10) {
      return sum;
    } else {
      return numSum(String(sum));
    }
  };

  const x = numSum(str);
  return x;
}

module.exports = {
  getSumOfDigits,
};
