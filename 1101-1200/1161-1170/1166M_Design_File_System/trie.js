// 1166. Design File System
// https://leetcode.com/problems/design-file-system/description/
// T.C.: O(n)
// S.C.: O(n)
class TrieNode {
  constructor(name) {
    this.name = name;
    this.val = -1;
    this.map = new Map();
  }
}

var FileSystem = function () {
  this.root = new TrieNode('');
};

/**
 * @param {string} path
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function (path, value) {
  const components = path.split('/');
  let cur = this.root;

  for (let i = 1; i < components.length; i++) {
    const currentComponent = components[i];
    if (!cur.map.has(currentComponent)) {
      if (i === components.length - 1) {
        cur.map.set(currentComponent, new TrieNode(currentComponent));
      } else {
        return false;
      }
    }
    cur = cur.map.get(currentComponent);
  }

  if (cur.val !== -1) {
    return false;
  }

  cur.val = value;
  return true;
};

/**
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function (path) {
  const components = path.split('/');
  let cur = this.root;
  for (let i = 1; i < components.length; i++) {
    const currentComponent = components[i];
    if (!cur.map.has(currentComponent)) {
      return -1;
    }
    cur = cur.map.get(currentComponent);
  }
  return cur?.val ?? -1;
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */

function test(ops, inputs, outputs) {
  const obj = new FileSystem();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    let result = null;
    if (op === 'createPath') {
      result = obj.createPath(...input);
    } else {
      result = obj.get(...input);
    }
    console.log(i, op, result, result === expected);
  }
}

var ops = ['FileSystem', 'createPath', 'get'],
  inputs = [[], ['/a', 1], ['/a']],
  outputs = [null, true, 1];
test(ops, inputs, outputs);

var ops = ['FileSystem', 'createPath', 'createPath', 'get', 'createPath', 'get'],
  inputs = [[], ['/leet', 1], ['/leet/code', 2], ['/leet/code'], ['/c/d', 1], ['/c']],
  outputs = [null, true, true, 2, false, -1];
test(ops, inputs, outputs);

var ops = ['FileSystem', 'createPath', 'get', 'createPath', 'get', 'createPath', 'get'],
  inputs = [[], ['/a', 1], ['/a'], ['/a/b/c', 2], ['/a/b/c'], ['/a/b', 3], ['/a/b']],
  outputs = [null, true, 1, false, -1, true, 3];
test(ops, inputs, outputs);

var ops = ['FileSystem', 'createPath', 'createPath', 'get', 'createPath', 'get'],
  inputs = [[], ['/leet', 1], ['/leet/code', 2], ['/leet/code'], ['/leet/code', 3], ['/leet/code']],
  outputs = [null, true, true, 2, false, 2];
test(ops, inputs, outputs);
