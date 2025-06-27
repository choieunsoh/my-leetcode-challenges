// 2014. Longest Subsequence Repeated k Times
// https://leetcode.com/problems/longest-subsequence-repeated-k-times/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function (s, k) {
  const a = 'a'.charCodeAt(0);
  const freq = new Array(26).fill(0);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    freq[s.charCodeAt(i) - a]++;
  }

  const candidates = [];
  for (let i = 25; i >= 0; i--) {
    if (freq[i] >= k) {
      candidates.push(String.fromCharCode(i + a));
    }
  }

  let result = '';
  const queue = [...candidates];
  while (queue.length) {
    const curr = queue.shift();
    if (curr.length > result.length) {
      result = curr;
    }

    for (const candidate of candidates) {
      const next = curr + candidate;
      if (isKRepeated(s, next, k)) {
        queue.push(next);
      }
    }
  }

  return result;

  function isKRepeated(s, pattern, k) {
    let index = 0;
    let matched = 0;
    for (const ch of s) {
      if (ch === pattern[index]) {
        index++;
        if (index === pattern.length) {
          index = 0;
          matched++;
          if (matched === k) return true;
        }
      }
    }
    return false;
  }
};

var s = 'letsleetcode',
  k = 2;
var expected = 'let';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s = 'bb',
  k = 2;
var expected = 'b';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s = 'ab',
  k = 2;
var expected = '';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s = 'nhsbbeonhsbbeonhsbbeo',
  k = 3;
var expected = 'nhsbbeo';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s = 'gbjbjigjbji',
  k = 2;
var expected = 'gjbji';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s =
    'buxkqqztnuxkqztuxkqztuxikqztuxkqztgucxkyqztuxkqztuxkqzcturxkqztuxdkqztuxkqztuxkqztuxkaqztuxkyqnztuxkqztuxkqpztofuxpkqztuxkqztuxkqdztuxkqztuexkqztuxkqztkuxkqztuxkqztuxkqztuajxkqtztuxkqztujxkqztuxkqqztuxktqztuxkqdztuxkqztukxkqzmtuxkqztuxakqztuxkqztjuxzkqztuxjkqzutuxkxqztuxkqztukxkqztuxklqztuxkqztuxkqzmtunzxkqztlulxkqzstuxkqztuxkqzituxkgqztnfuxkjqzetuxkqztuxkqzxtauxkqztuxokqztuxkqzjwtuxfkqztuxkxqzt',
  k = 57;
var expected = 'uxkqzt';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s =
    'rtkfyrtkfvrtkfrtkfrtkfrtckfrtkfrtkfrtkfmrtkfrtvkfrtkftirtkfrtkfartkfrtjukfrtkfrtmkfrtkfrtkdfrtkfrtkfrtkfrtkfrtkfrtkfrtkcfrwtkfrtkfsrtkfrtkfrtkfrtkfrtkfrtkqfrtkfrtkfrtkfrtkfrtkfrtkfrtkfrtkfrtkfrtkfrtrkfrtkfrtkfrtkfrtkfrtkfrtkf',
  k = 52;
var expected = 'rtkf';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s =
    'tqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloqtqtzloq',
  k = 52;
var expected = 'tqtzloq';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);

var s =
    'oqswqmtewpwwqwygbwqjwsqrwqwqlxwhqwcqwxqwqfwxqqwqjrwjewqwqqwqibwqyewpqwqwvqwqwqlwoqwqlgwpqgcwqzzyiqwqwqwqkyrwkuqwqztcwlqwzerdqqewpvqwfqwqwqwoxqwqwqwqwqryagwwqwwqvwdqqwqwfqwcqwqwqwxqwqwpqspqwqwqwqwqwrqewqffvnwhlqtiwqwyqwiqqjwqwchyqwwqwqqwwqwmqzrwgquweosquwlquwaqwqwkwcqwqfwdpqwqcwqwifucqwqtwqewqcylgwqwyqwqwptqfwfqwqwbqwqijqwqwaqkuzwukqwswklmzqwwozqwqjwqdqwqwqwqcwqmqw',
  k = 102;
var expected = 'qw';
var result = longestSubsequenceRepeatedK(s, k);
console.log(result, result === expected);
