// 1233. Remove Sub-Folders from the Filesystem
// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/
// T.C.: O(m^2*n)
// S.C.: O(m*n)
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  // Create a set to store all folder paths for fast lookup
  const folderSet = new Set(folder);
  const result = [];

  // Iterate through each folder to check if it's a sub-folder
  for (const f of folder) {
    let isSubFolder = false;
    let prefix = f;

    // Check all prefixes of the current folder path
    while (prefix !== '') {
      let pos = prefix.lastIndexOf('/');
      if (pos == -1) break;

      // Reduce the prefix to its parent folder
      prefix = prefix.substring(0, pos);

      // If the parent folder exists in the set, mark as sub-folder
      if (folderSet.has(prefix)) {
        isSubFolder = true;
        break;
      }
    }

    // If not a sub-folder, add it to the result
    if (!isSubFolder) {
      result.push(f);
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
