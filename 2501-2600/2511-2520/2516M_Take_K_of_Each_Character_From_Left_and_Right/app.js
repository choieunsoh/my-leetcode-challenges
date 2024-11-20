// 2516. Take K of Each Character From Left and Right
// https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  const n = s.length;
  const a = 'a'.charCodeAt(0);
  const counts = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    counts[s.charCodeAt(i) - a]++;
  }

  if (counts[0] < k || counts[1] < k || counts[2] < k) return -1;

  let maxWindowSize = 0;
  let left = 0;
  const windowCounts = [0, 0, 0];
  for (let right = 0; right < n; right++) {
    windowCounts[s.charCodeAt(right) - a]++;
    while (
      left <= right &&
      (counts[0] - windowCounts[0] < k || counts[1] - windowCounts[1] < k || counts[2] - windowCounts[2] < k)
    ) {
      windowCounts[s.charCodeAt(left) - a]--;
      left++;
    }

    maxWindowSize = Math.max(maxWindowSize, right - left + 1);
  }

  return n - maxWindowSize;
};

var s = 'aabaaaacaabc',
  k = 2;
var expected = 8;
var result = takeCharacters(s, k);
console.log(result, result === expected);

var s = 'a',
  k = 1;
var expected = -1;
var result = takeCharacters(s, k);
console.log(result, result === expected);
