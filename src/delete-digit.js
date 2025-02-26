const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strArr = String(n).split("");
  let arrNewDigits = [];
  for (let i = 0; i < strArr.length; i += 1) {
    let arr = arrNewDigits.push(
      +strArr
        .slice(0)
        .splice(i + 1, 1)
        .join("")
    );
  }
}

module.exports = {
  deleteDigit,
};
