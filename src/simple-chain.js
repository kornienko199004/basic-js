const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainStr = this.chain.reduce((acc, item, index) => {
      return index === 0 ? `( ${item} )` : `${acc}~~( ${item} )`
    }, '');
    this.chain = [];
    return chainStr;
  }
};

module.exports = chainMaker;
