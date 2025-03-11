// 1358. Number of Substrings Containing All Three Characters
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let [a, b, c] = [0, 0, 0];
  let count = 0;
  let left = 0;
  let right = 0;
  const n = s.length;
  while (right < n) {
    if (s[right] === 'a') a++;
    else if (s[right] === 'b') b++;
    else if (s[right] === 'c') c++;

    while (left < n && a && b && c) {
      count += n - right;
      if (s[left] === 'a') a--;
      else if (s[left] === 'b') b--;
      else if (s[left] === 'c') c--;
      left++;
    }
    right++;
  }
  return count;
};

var s = 'abcabc';
var expected = 10;
var result = numberOfSubstrings(s);
console.log(result, expected === result);

var s = 'aaacb';
var expected = 3;
var result = numberOfSubstrings(s);
console.log(result, expected === result);

var s = 'abc';
var expected = 1;
var result = numberOfSubstrings(s);
console.log(result, expected === result);
