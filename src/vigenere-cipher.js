const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(init = true) {
    this.init = init;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let newKey = key.repeat(Math.ceil(str.length / key.length));
    let encodeKey = "";
    let newStr = str.split(" ");
    let value = 0;
    let startSeparator = 0;

    for (let i = 0; i < newStr.length; i += 1) {
      value = newStr[i].length;
      encodeKey =
        encodeKey + newKey.slice(startSeparator, startSeparator + value) + " ";
      startSeparator = startSeparator + value;
    }

    next: for (let x = 0; x < str.length; x += 1) {
      if (str[x].charCodeAt() < 65 || str[x].charCodeAt() > 90) {
        result = result + str[x];
        continue next;
      }
      let symb;
      let enc = encodeKey[x].charCodeAt() - 65;

      if (str[x].charCodeAt() + enc > 90) {
        let charDiff = str[x].charCodeAt() + enc - 90;
        symb = String.fromCharCode(64 + charDiff);
      } else {
        symb = String.fromCharCode(str[x].charCodeAt() + enc);
      }
      result = result + symb;
    }

    if (this.init) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let newKey = key.repeat(Math.ceil(str.length / key.length));
    let encodeKey = "";
    let newStr = str.split(" ");
    let value = 0;
    let startSeparator = 0;

    for (let i = 0; i < newStr.length; i += 1) {
      value = newStr[i].length;
      encodeKey =
        encodeKey + newKey.slice(startSeparator, startSeparator + value) + " ";
      startSeparator = startSeparator + value;
    }

    next: for (let x = 0; x < str.length; x += 1) {
      if (str[x].charCodeAt() < 65 || str[x].charCodeAt() > 90) {
        result = result + str[x];
        continue next;
      }
      let symb;
      let enc = encodeKey[x].charCodeAt() - 65;

      if (str[x].charCodeAt() - enc < 65) {
        let charDiff = 65 - (str[x].charCodeAt() - enc);
        symb = String.fromCharCode(91 - charDiff);
      } else {
        symb = String.fromCharCode(str[x].charCodeAt() - enc);
      }
      result = result + symb;
    }
    if (this.init) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
