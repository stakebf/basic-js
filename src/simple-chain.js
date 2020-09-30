const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    typeof value === 'undefined' ? this.value.push(`( )`) : this.value.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position > this.value.length) {
      this.value = [];
      throw new Error('');
    }
    this.value.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    const result = this.value.join('~~');
    this.value = [];
    return result;
  }
};

module.exports = chainMaker;
