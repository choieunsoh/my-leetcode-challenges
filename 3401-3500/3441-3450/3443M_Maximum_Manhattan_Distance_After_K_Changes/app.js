// 3443. Maximum Manhattan Distance After K Changes
// https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (s, k) {
  let result = 0;
  let x = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'N') y++;
    else if (s[i] === 'S') y--;
    else if (s[i] === 'E') x++;
    else if (s[i] === 'W') x--;

    const diff = Math.abs(x) + Math.abs(y);
    const total = i + 1;
    const extra = Math.min(total - diff, 2 * k);
    result = Math.max(result, diff + extra);
  }
  return result;
};

var s = 'NWSE',
  k = 1;
var expected = 3;
var result = maxDistance(s, k);
console.log(result, result === expected);

var s = 'NSWWEW',
  k = 3;
var expected = 6;
var result = maxDistance(s, k);
console.log(result, result === expected);
