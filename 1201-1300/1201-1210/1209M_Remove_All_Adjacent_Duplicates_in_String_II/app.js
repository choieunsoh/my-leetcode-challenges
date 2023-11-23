// 1209. Remove All Adjacent Duplicates in String II
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || s.charAt(i) !== stack[stack.length - 1][1]) {
      stack.push([1, s.charAt(i)]);
    } else {
      const [count, char] = stack.pop();
      if (count + 1 < k) {
        stack.push([count + 1, char]);
      }
    }
  }

  let result = '';
  for (const [count, char] of stack) {
    result += char.repeat(count);
  }
  return result;
};

var s = 'abcd',
  k = 2;
var expected = 'abcd';
var result = removeDuplicates(s, k);
console.log(result, result === expected);

var s = 'deeedbbcccbdaa',
  k = 3;
var expected = 'aa';
var result = removeDuplicates(s, k);
console.log(result, result === expected);

var s = 'pbbcggttciiippooaais',
  k = 2;
var expected = 'ps';
var result = removeDuplicates(s, k);
console.log(result, result === expected);
