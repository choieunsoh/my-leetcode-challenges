// 1055. Shortest Way to Form String
// https://leetcode.com/problems/shortest-way-to-form-string/description/
// T.C.: O(T + S)
// S.C.: O(S)
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  const m = source.length;
  const maps = new Array(m + 1);
  maps[m] = new Array(26).fill(-1);
  const aCode = 'a'.charCodeAt(0);
  for (let j = m - 1; j >= 0; j--) {
    maps[j] = Array.from(maps[j + 1]);
    maps[j][source[j].charCodeAt(0) - aCode] = j;
  }

  let count = 0;
  for (let i = 0, j = 0; i < target.length; ) {
    if (j === 0) {
      count++;
    }
    const index = maps[j][target[i].charCodeAt(0) - aCode];
    if (index < 0) {
      if (j === 0) {
        return -1;
      }
      j = 0;
    } else {
      j = index + 1;
      if (j === m) {
        j = 0;
      }
      i++;
    }
  }
  return count;
};

var source = 'abc',
  target = 'abcbc';
var expected = 2;
var result = shortestWay(source, target);
console.log(result, result === expected);

var source = 'abc',
  target = 'acdbc';
var expected = -1;
var result = shortestWay(source, target);
console.log(result, result === expected);

var source = 'xyz',
  target = 'xzyxz';
var expected = 3;
var result = shortestWay(source, target);
console.log(result, result === expected);
