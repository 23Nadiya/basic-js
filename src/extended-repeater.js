const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = "";
  let add = "";

  if (Object.keys(options).length == 0) {
    return str;
  }

  if (
    options.hasOwnProperty("addition") &&
    options.hasOwnProperty("additionRepeatTimes")
  ) {
    for (let i = 0; i < options["additionRepeatTimes"] - 1; i += 1) {
      if (options.hasOwnProperty("additionSeparator")) {
        add = add + options["addition"] + options["additionSeparator"];
      } else {
        add = add + options["addition"] + "|";
      }
    }
    add = add + options["addition"];
  } else if (options.hasOwnProperty("addition")) {
    add = options["addition"];
  }

  if (options.hasOwnProperty("repeatTimes")) {
    for (let x = 0; x < options["repeatTimes"] - 1; x += 1) {
      if (options.hasOwnProperty("separator")) {
        result = result + str + add + options["separator"];
      } else {
        result = result + str + add + "+";
      }
    }
    result = result + str + add;
  } else if (add !== "") {
    result = str + add;
  }

  return result;
}

module.exports = {
  repeater,
};
