// 1520. Maximum Number of Non-Overlapping Substrings
// https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function (s) {
  const first = new Int32Array(26).fill(-1);
  const last = new Int32Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;
    if (first[code] === -1) first[code] = i;
    last[code] = i;
  }
  const intervals = [];
  for (let code = 0; code < 26; code++) {
    if (first[code] === -1) continue;
    const start = first[code];
    let end = last[code],
      valid = true;
    for (let i = start; i <= end; i++) {
      const inside = s.charCodeAt(i) - 97;
      if (first[inside] < start) {
        valid = false;
        break;
      }
      end = Math.max(end, last[inside]);
    }
    if (valid) intervals.push([start, end]);
  }
  intervals.sort((a, b) => a[1] - b[1] || b[0] - a[0]);
  const answer = [];
  let previousEnd = -1;
  for (const [start, end] of intervals) {
    if (start > previousEnd) {
      answer.push(s.slice(start, end + 1));
      previousEnd = end;
    }
  }
  return answer;
};

var s = 'adefaddaccc';
var expected = ['e', 'f', 'ccc'];
var result = maxNumOfSubstrings(s);
console.log(result, result.join() === expected.join());

var s = 'abbaccd';
var expected = ['d', 'bb', 'cc'];
var result = maxNumOfSubstrings(s);
console.log(result, result.sort().join() === expected.sort().join());
