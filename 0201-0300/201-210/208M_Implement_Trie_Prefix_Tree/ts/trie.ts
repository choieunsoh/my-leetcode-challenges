// 208. Implement Trie (Prefix Tree)
// https://leetcode.com/problems/implement-trie-prefix-tree/
var test = function () {
  class Trie {
    children: { [key: string]: Trie };
    isWord: boolean;

    constructor() {
      this.children = {};
      this.isWord = false;
    }

    insert(word: string): void {
      let node: Trie = this;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) {
          node.children[char] = new Trie();
        }
        node = node.children[char];
      }
      node.isWord = true;
    }

    search(word: string): boolean {
      let node: Trie = this;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!node.children[char]) return false;
        node = node.children[char];
      }
      return node.isWord;
    }

    startsWith(prefix: string): boolean {
      let node: Trie = this;
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!node.children[char]) return false;
        node = node.children[char];
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
  let result208: boolean = false;
  const trie208 = new Trie();
  trie208.insert('apple');
  console.log('insert: apple', trie208);
  result208 = trie208.search('apple');
  console.log('search: apple', trie208, result208);
  result208 = trie208.search('app');
  console.log('search: app', trie208, result208);
  result208 = trie208.startsWith('app');
  console.log('startsWith: app', trie208, result208);
  trie208.insert('app');
  console.log('insert: app', trie208);
  result208 = trie208.search('app');
  console.log('search: app', trie208, result208);
};

test();
