// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    max = Math.max(max, i - left + 1);
  }

  return max;
};

var s = 'abcabcbb';
var expected = 3;

var s = 'bbbbb';
var expected = 1;
console.log(lengthOfLongestSubstring(s), expected);

var s = 'pwwkew';
var expected = 3;
console.log(lengthOfLongestSubstring(s), expected);
