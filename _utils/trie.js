var Trie = function () {
  this.children = new Map();
  this.word = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this;
  for (const char of word) {
    if (!node.children.has(char)) {
      node.children.set(char, new Trie());
    }
    node = node.children.get(char);
  }
  node.word = true;
  return true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this;
  for (const char of word) {
    if (!node.children.has(char)) {
      return false;
    }
    node = node.children.get(char);
  }
  return node.word;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this;
  for (const char of prefix) {
    if (!node.children.has(char)) {
      return false;
    }
    node = node.children.get(char);
  }
  return true;
};

module.exports = {
  Trie,
};

/*
  toJSON() {
    const result = {
      children: {},
      word: this.word,
      words: this.words,
    };
    for (const [char, childNode] of this.children) {
      result.children[char] = childNode.toJSON();
    }
    return result;
  }

*/
