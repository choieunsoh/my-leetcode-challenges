// 1233. Remove Sub-Folders from the Filesystem
// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  const trie = new Trie();
  for (const path of folder) {
    trie.insert(path);
  }

  const result = [];
  for (const path of folder) {
    if (trie.isSubfolder(path)) continue;
    result.push(path);
  }
  return result;
};

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfFolder = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(folder) {
    folder = folder.split('/');
    let current = this.root;
    for (const path of folder) {
      if (path === '') continue;
      if (!current.children.has(path)) {
        current.children.set(path, new TrieNode());
      }
      current = current.children.get(path);
    }
    current.isEndOfFolder = true;
  }

  isSubfolder(folder) {
    folder = folder.split('/');
    let current = this.root;
    for (let i = 1; i < folder.length; i++) {
      const path = folder[i];

      if (!current.children.has(path)) return false;
      if (current.isEndOfFolder && i !== folder.length) return true;

      current = current.children.get(path);
    }
    return false;
  }
}

var folder = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'];
var expected = ['/a', '/c/d', '/c/f'];
var result = removeSubfolders(folder);
console.log(result, result.sort().join() === expected.sort().join());

var folder = ['/a', '/a/b/c', '/a/b/d'];
var expected = ['/a'];
var result = removeSubfolders(folder);
console.log(result, result.sort().join() === expected.sort().join());

var folder = ['/a/b/c', '/a/b/ca', '/a/b/d'];
var expected = ['/a/b/c', '/a/b/ca', '/a/b/d'];
var result = removeSubfolders(folder);
console.log(result, result.sort().join() === expected.sort().join());
