// 1055. Shortest Way to Form String
// https://leetcode.com/problems/shortest-way-to-form-string/description/
// T.C.: O(T * S)
// S.C.: O(T * S)
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  const a = 'a'.charCodeAt(0);
  const S = source.length;
  const sourceChars = new Array(26);
  for (let i = 0; i < S; i++) {
    sourceChars[source.charCodeAt(i) - a] = true;
  }

  for (let i = 0; i < target.length; i++) {
    if (!sourceChars[target.charCodeAt(i) - a]) {
      return -1;
    }
  }

  let sourceIndex = 0;
  let count = 0;
  for (const ch of target) {
    if (sourceIndex === 0) count++;
    while (source[sourceIndex] !== ch) {
      sourceIndex = (sourceIndex + 1) % S;
      if (sourceIndex === 0) count++;
    }
    sourceIndex = (sourceIndex + 1) % S;
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
