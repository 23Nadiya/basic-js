const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log(date);
  // console.log(Object.getOwnPropertySymbols(date).length > 0);

  if (Date.parse(date) === NaN) {
    return "Invalid date!";
  } else if (getSeason.arguments.length === 0) {
    return "Unable to determine the time of year!";
  }

  if (Object.getOwnPropertySymbols(date).length > 0) {
    throw new Error("Invalid date!");
  }

  try {
    date.getMonth();
  } catch {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();

  if (2 <= month && month < 5) {
    return "spring";
  } else if (5 <= month && month < 8) {
    return "summer";
  } else if (8 <= month && month < 11) {
    return "autumn";
  } else {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
