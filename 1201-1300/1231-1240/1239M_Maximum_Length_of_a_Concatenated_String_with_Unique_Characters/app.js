// 1239. Maximum Length of a Concatenated String with Unique Characters
// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  return dfs(arr, 0, '');

  function dfs(arr, index, path) {
    const set = new Set(path.split(''));
    if (path.length !== set.size) {
      return 0;
    }

    let bestLength = path.length;
    for (let i = index; i < arr.length; i++) {
      const length = dfs(arr, i + 1, path + arr[i]);
      bestLength = Math.max(bestLength, length);
    }
    return bestLength;
  }
};

var arr = ['un', 'iq', 'ue'];
var expected = 4;
var result = maxLength(arr);
console.log(result, result === expected);

var arr = ['cha', 'r', 'act', 'ers'];
var expected = 6;
var result = maxLength(arr);
console.log(result, result === expected);

var arr = ['abcdefghijklmnopqrstuvwxyz'];
var expected = 26;
var result = maxLength(arr);
console.log(result, result === expected);

var arr = ['jnfbyktlrqumowxd', 'mvhgcpxnjzrdei'];
var expected = 16;
var result = maxLength(arr);
console.log(result, result === expected);
