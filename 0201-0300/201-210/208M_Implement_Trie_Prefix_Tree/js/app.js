// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/

class Trie {
  constructor() {
    this.nodes = new Map();
    this.word = false;
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this;
    for (const char of word) {
      if (!node.nodes.has(char)) {
        node.nodes.set(char, new Trie());
      }
      node = node.nodes.get(char);
    }
    node.word = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this;
    for (const char of word) {
      if (!node.nodes.has(char)) return false;
      node = node.nodes.get(char);
    }
    return node.word;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this;
    for (const char of prefix) {
      if (!node.nodes.has(char)) return false;
      node = node.nodes.get(char);
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
