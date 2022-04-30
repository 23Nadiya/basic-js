const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  s1 = s1.split("");
  s2 = s2.split("");
  let general = [...new Set(s1.filter((el) => s2.includes(el)))];
  let newS1 = {};
  let newS2 = {};

  for (let elem of general) {
    newS1[elem] = 0;
    newS2[elem] = 0;
  }

  for (let el of s1) {
    newS1[el]++;
  }

  for (let el of s2) {
    newS2[el]++;
  }

  for (let elem of general) {
    if (newS1[elem] > newS2[elem]) {
      counter += newS2[elem];
    } else {
      counter += newS1[elem];
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
