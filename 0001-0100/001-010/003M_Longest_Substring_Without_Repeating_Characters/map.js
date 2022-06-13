// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  const stringLength = s.length;
  if (stringLength < 2) {
    return stringLength;
  }

  let start = 0;
  let end = 1;
  const currentWindowMap = new Map([[s[0], 0]]);
  let longestChain = 1;
  let currentChain = 1;

  while (end !== stringLength) {
    const endChar = s[end];
    if (!currentWindowMap.has(endChar)) {
      currentWindowMap.set(endChar, end);
      end++;
    } else {
      currentWindowMap.delete(s[start]);
      start++;
    }

    currentChain = end - start;
    if (currentChain > longestChain) {
      longestChain = currentChain;
    }
  }

  return longestChain;
};

var s = 'abcabcbb';
var expected = 3;

var s = 'bbbbb';
var expected = 1;
console.log(lengthOfLongestSubstring(s), expected);

var s = 'pwwkew';
var expected = 3;
console.log(lengthOfLongestSubstring(s), expected);
