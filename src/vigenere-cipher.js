const CustomError = require("../extensions/custom-error");

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z'
];

class VigenereCipheringMachine {
  tabulaRecta;
  direct;
  keyIndex = 0;
  
  constructor(direct = true) {
    this.direct = direct;
    this.tabulaRecta = this.createTabulaRecta();
  }

  createTabulaRecta() {
    return alphabet.reduce((acc, letter) => {
      const index = alphabet.indexOf(letter);
      const shiftedAlphabet = [...alphabet.slice(index), ...alphabet.slice(0, index)];
      return { ...acc, [letter.toUpperCase()]: shiftedAlphabet };
    }, {});
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error();
    }

    let msgToEncrypt = msg;
    if (!this.direct) {
      msgToEncrypt = msg.split('').reverse().join('');
    }

    const encryptMsg = msgToEncrypt.split(' ').reduce((acc, word, index) => {
      const encryptedWord = this.encryptWord(word, key);
      return index > 0 ? `${acc} ${encryptedWord}` : encryptedWord;
    }, '');

    this.resetKeyIndex();
    return encryptMsg.toUpperCase();
  }

  encryptWord(msgWord, key) {
    return msgWord.toUpperCase().split('').reduce((acc, letter) => {

      const keyLetter = key[this.keyIndex].toUpperCase();
      const msgLetterIndex = alphabet.indexOf(letter.toLowerCase());

      let incryptedLetter = letter;
      if (msgLetterIndex > -1) {
        incryptedLetter = this.tabulaRecta[keyLetter][msgLetterIndex];
      }

      this.increaseKeyIndex(key);
      return acc += incryptedLetter;
    }, '');
  }

  increaseKeyIndex(key) {
    this.keyIndex += 1;
    if (this.keyIndex === key.length) {
      this.keyIndex = 0;
    }
  }

  resetKeyIndex() {
    this.keyIndex = 0;
  }

  decrypt(encryptedMsg, key) {
    if (!encryptedMsg || !key) {
      throw new Error();
    }
    
    let msg = encryptedMsg;
    if (!this.direct) {
      msg = encryptedMsg.split('').reverse().join('');
    }

    const result = msg.split(' ').reduce((acc, word, index) => {
      const decryptedWord = this.decryptWord(word, key);
      return index > 0 ? `${acc} ${decryptedWord}` : decryptedWord;
    }, '').toUpperCase();

    this.resetKeyIndex();
    return result;
  }

  decryptWord(msgWord, key) {
    return msgWord.toUpperCase().split('').reduce((acc, letter) => {

      const keyLetter = key[this.keyIndex].toUpperCase();

      const shiftedAlphabet = this.tabulaRecta[keyLetter];
      const encryptedMsgLetterIndex = shiftedAlphabet.indexOf(letter.toLowerCase());

      let decryptedLetter = letter;
      if (encryptedMsgLetterIndex > -1) {
        decryptedLetter = alphabet[encryptedMsgLetterIndex];
      }

      this.increaseKeyIndex(key);
      return acc += decryptedLetter;
    }, '');
  }
}

module.exports = VigenereCipheringMachine;
