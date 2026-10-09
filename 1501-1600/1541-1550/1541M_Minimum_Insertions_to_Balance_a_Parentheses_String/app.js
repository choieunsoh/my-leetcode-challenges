// 1541. Minimum Insertions to Balance a Parentheses String
// https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const length = s.length;
  let insertions = 0;
  let leftCount = 0;
  let index = 0;

  while (index < length) {
    const c = s[index];
    if (c === '(') {
      leftCount++;
      index++;
    } else {
      if (leftCount > 0) {
        leftCount--;
      } else {
        insertions++;
      }

      if (index < length - 1 && s[index + 1] === ')') {
        index += 2;
      } else {
        insertions++;
        index++;
      }
    }
  }

  insertions += leftCount * 2;
  return insertions;
};

var s = '(()))';
var expected = 1;
var result = minInsertions(s);
console.log(result, result === expected);

var s = '())';
var expected = 0;
var result = minInsertions(s);
console.log(result, result === expected);

var s = '))())(';
var expected = 3;
var result = minInsertions(s);
console.log(result, result === expected);
