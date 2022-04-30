const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (arr.length === 0) {
    return [];
  }

  next: for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--discard-next") {
      if (arr[i + 1] === undefined) {
        continue next;
      } else {
        i += 2;
      }
    } else if (arr[i] === "--discard-prev") {
      if (arr[i - 1] === undefined) {
        continue next;
      } else {
        result.pop();
      }
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1] === undefined) {
        continue next;
      } else {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (arr[i - 1] === undefined) {
        continue next;
      } else {
        result.push(arr[i - 1]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform,
};
