const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  length: 0,
  array: [],

  getLength: function () {
    return this.length;
  },
  addLink: function (value) {
    this.array.push(value);
    this.length++;
    return this;
  },
  removeLink: function (position) {
    if (
      !Number.isInteger(position) ||
      position > this.length ||
      position <= 0
    ) {
      this.length = 0;
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain: function () {
    this.array.reverse();
    return this;
  },
  finishChain: function () {
    for (let i = 0; i < this.array.length; i += 1) {
      if (this.array[i] === null) {
        this.array.splice(i, 1, "null");
      }
    }
    let result = "( " + this.array.join(" )~~( ") + " )";
    this.length = 0;
    this.array = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
