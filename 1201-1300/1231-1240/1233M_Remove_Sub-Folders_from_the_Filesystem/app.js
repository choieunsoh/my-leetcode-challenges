// 1233. Remove Sub-Folders from the Filesystem
// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/
// T.C.: O(m*n log n)
// S.C.: O(m*n)
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort();

  const result = [];
  for (const path of folder) {
    if (result.length === 0 || !path.startsWith(result.at(-1) + '/')) {
      result.push(path);
    }
  }
  return result;
};

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
