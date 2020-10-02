const CustomError = require("../extensions/custom-error");

const FIRST_LETTER = 65;
const LAST_LETTER = 90;
const ALPHABET_LENGTH = 26;
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('');
    }

    const charCodeMsg = this.getArrayCharCods(msg);
    const charCodeKey = this.getArrayCharCods(key);

    let counter = 0;

    const fullKey = charCodeMsg.map((symbol, index) => {
      if (symbol > ALPHABET_LENGTH) {
        return symbol;
      } else {
        if (counter > charCodeKey.length - 1) {
          counter = 0;
        }
        const currentLetter = charCodeKey[counter];
        counter++;

        return currentLetter;
      }
    });

    const result = fullKey
      .map((charCode, index) => {
        if (charCode > ALPHABET_LENGTH) {
          return String.fromCharCode(charCode);
        }
        return String.fromCharCode(
          ((charCode + charCodeMsg[index]) % ALPHABET_LENGTH) + 65
        );
      });

    if (!this.reverse) {
      return result.reverse().join('');
    }
    return result.join('');
  }

  getArrayCharCods(text) {
    return text.split('').map((symbol, index) => {
      const upperCase = symbol.toUpperCase('');
      const code = upperCase.charCodeAt(0);

      if (code >= FIRST_LETTER && code <= LAST_LETTER) {
        return code - 65;
      }
      return code;
    });
  }

  decrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('');
    }

    const charCodeMsg = this.getArrayCharCods(msg);
    const charCodeKey = this.getArrayCharCods(key);

    let counter = 0;

    const result = charCodeMsg
      .map((charCode) => {
        if (charCode > ALPHABET_LENGTH) {
          return String.fromCharCode(charCode);
        }
        if (counter > charCodeKey.length - 1) {
          counter = 0;
        }
        const currentLetter = charCodeKey[counter];
        counter++;
        return String.fromCharCode(
          ((charCode + ALPHABET_LENGTH - currentLetter) %
            ALPHABET_LENGTH) +
          65
        );
      });

    if (!this.reverse) {
      return result.reverse().join('');
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
