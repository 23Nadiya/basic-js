const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === "string") {
      arr.push(members[i].trim()[0].toUpperCase());
    }
  }
  arr.sort();
  if (arr.length === 0) {
    return false;
  }
  return arr.join("");
}

module.exports = {
  createDreamTeam,
};
