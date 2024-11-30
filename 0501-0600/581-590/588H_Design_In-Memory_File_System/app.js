// 588. Design In-Memory File System
// https://leetcode.com/problems/design-in-memory-file-system/description/
// T.C.: ls: O(m + n + k log k)
// T.C.: mkdir: O(m + n)
// S.C.: O()
class File {
  constructor() {
    this.isFile = false;
    this.files = new Map();
    this.content = '';
  }
}

class FileSystem {
  constructor() {
    this.root = new File();
  }

  /**
   * @param {string} path
   * @return {string[]}
   */
  ls(path) {
    let file = this.root;
    const files = [];
    if (path !== '/') {
      const dirs = path.split('/');
      for (let i = 1; i < dirs.length; i++) {
        file = file.files.get(dirs[i]);
      }
      if (file.isfile) {
        files.push(dirs[dirs.length - 1]);
        return files;
      }
    }
    return [...file.files.keys()].sort();
  }

  /**
   * @param {string} path
   * @return {void}
   */
  mkdir(path) {
    let file = this.root;
    const dirs = path.split('/');
    for (let i = 1; i < dirs.length; i++) {
      if (!file.files.has(dirs[i])) {
        file.files.set(dirs[i], new File());
      }
      file = file.files.get(dirs[i]);
    }
  }

  /**
   * @param {string} filePath
   * @param {string} content
   * @return {void}
   */
  addContentToFile(filePath, content) {
    let file = this.root;
    const dirs = filePath.split('/');
    for (let i = 1; i < dirs.length - 1; i++) {
      file = file.files.get(dirs[i]);
    }
    if (!file.files.has(dirs[dirs.length - 1])) {
      file.files.set(dirs[dirs.length - 1], new File());
    }
    file = file.files.get(dirs[dirs.length - 1]);
    file.isfile = true;
    file.content += content;
  }

  /**
   * @param {string} filePath
   * @return {string}
   */
  readContentFromFile(filePath) {
    let file = this.root;
    const dirs = filePath.split('/');
    for (let i = 1; i < dirs.length; i++) {
      file = file.files.get(dirs[i]);
    }
    return file.content;
  }
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */

function run(ops, inputs, outputs) {
  const obj = new FileSystem();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    const result = obj[op](...input) ?? null;
    console.log(i, op, input, result, JSON.stringify(result) === JSON.stringify(expected));
  }
  console.log();
}
var ops = ['FileSystem', 'ls', 'mkdir', 'addContentToFile', 'ls', 'readContentFromFile'],
  inputs = [[], ['/'], ['/a/b/c'], ['/a/b/c/d', 'hello'], ['/'], ['/a/b/c/d']],
  outputs = [null, [], null, null, ['a'], 'hello'];
run(ops, inputs, outputs);
