// 1370. Increasing Decreasing String
// https://leetcode.com/problems/increasing-decreasing-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - a]++;
  }
  let forward = true;
  let result = '';
  while (result.length !== s.length) {
    if (forward) {
      for (let i = 0; i < 26; i++) {
        if (counts[i] > 0) {
          result += String.fromCharCode(i + a);
          counts[i]--;
        }
      }
    } else {
      for (let i = 25; i >= 0; i--) {
        if (counts[i] > 0) {
          result += String.fromCharCode(i + a);
          counts[i]--;
        }
      }
    }
    forward = !forward;
  }
  return result;
};

var s = 'aaaabbbbcccc';
var expected = 'abccbaabccba';
var result = sortString(s);
console.log(result, result === expected);

var s = 'rat';
var expected = 'art';
var result = sortString(s);
console.log(result, result === expected);
