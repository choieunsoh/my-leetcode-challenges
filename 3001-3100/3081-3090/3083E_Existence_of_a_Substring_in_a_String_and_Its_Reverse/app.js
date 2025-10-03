// 3083. Existence of a Substring in a String and Its Reverse
// https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  const forwardSeen = new Set();
  const backwardSeen = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    const forward = s[i] + s[i + 1];
    const backward = s[i + 1] + s[i];

    forwardSeen.add(forward);
    if (forwardSeen.has(backward)) return true;

    backwardSeen.add(backward);
    if (backwardSeen.has(forward)) return true;
  }

  return false;
};

var s = 'leetcode';
var expected = true;
var result = isSubstringPresent(s);
console.log(result, result === expected);

var s = 'abcba';
var expected = true;
var result = isSubstringPresent(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = false;
var result = isSubstringPresent(s);
console.log(result, result === expected);
