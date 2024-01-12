// 1704. Determine if String Halves Are Alike
// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let leftCount = 0;
  let rightCount = 0;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const leftChar = s.charAt(left++);
    const rightChar = s.charAt(right--);
    if (vowels.has(leftChar)) {
      leftCount++;
    }
    if (vowels.has(rightChar)) {
      rightCount++;
    }
  }
  return leftCount === rightCount;
};

var s = 'book';
var expected = true;
var result = halvesAreAlike(s);
console.log(result, result === expected);

var s = 'textbook';
var expected = false;
var result = halvesAreAlike(s);
console.log(result, result === expected);
