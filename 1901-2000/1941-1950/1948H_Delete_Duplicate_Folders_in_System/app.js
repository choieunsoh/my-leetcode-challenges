// 1948. Delete Duplicate Folders in System
// https://leetcode.com/problems/delete-duplicate-folders-in-system/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function (paths) {
  class Trie {
    constructor() {
      this.serial = '';
      this.children = new Map();
    }
  }

  const root = new Trie();
  for (const path of paths) {
    let cur = root;
    for (const node of path) {
      if (!cur.children.has(node)) {
        cur.children.set(node, new Trie());
      }
      cur = cur.children.get(node);
    }
  }

  const freq = new Map();
  construct(root);

  const result = [];
  const path = [];
  operate(root);
  return result;

  function construct(node) {
    if (node.children.size === 0) return;
    const v = [];
    for (const [folder, child] of node.children) {
      construct(child);
      v.push(`${folder}(${child.serial})`);
    }
    v.sort();
    node.serial = v.join('');
    freq.set(node.serial, (freq.get(node.serial) ?? 0) + 1);
  }

  function operate(node) {
    if ((freq.get(node.serial) ?? 0) > 1) return;
    if (path.length > 0) {
      result.push([...path]);
    }
    for (const [folder, child] of node.children) {
      path.push(folder);
      operate(child);
      path.pop();
    }
  }
};

var paths = [['a'], ['c'], ['d'], ['a', 'b'], ['c', 'b'], ['d', 'a']];
var expected = [['d'], ['d', 'a']];
var result = deleteDuplicateFolder(paths);
console.log(result, result.sort().join() == expected.sort().join());

var paths = [['a'], ['c'], ['a', 'b'], ['c', 'b'], ['a', 'b', 'x'], ['a', 'b', 'x', 'y'], ['w'], ['w', 'y']];
var expected = [['c'], ['c', 'b'], ['a'], ['a', 'b']];
var result = deleteDuplicateFolder(paths);
console.log(result, result.sort().join() == expected.sort().join());

var paths = [['a', 'b'], ['c', 'd'], ['c'], ['a']];
var expected = [['c'], ['c', 'd'], ['a'], ['a', 'b']];
var result = deleteDuplicateFolder(paths);
console.log(result, result.sort().join() == expected.sort().join());
