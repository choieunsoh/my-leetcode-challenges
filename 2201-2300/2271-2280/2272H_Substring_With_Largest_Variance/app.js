// 2272. Substring With Largest Variance
// https://leetcode.com/problems/substring-with-largest-variance/
/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
  const n = s.length;
  const codes = new Array(n);
  const a = 'a'.charCodeAt();
  const counter = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - a;
    counter[index]++;
    codes[i] = index;
  }

  let globalMax = 0;
  for (let major = 0; major < 26; major++) {
    for (let minor = 0; minor < 26; minor++) {
      // major and minor cannot be the same, and both must appear in s.
      if (major === minor || counter[major] === 0 || counter[minor] === 0) continue;

      // Find the maximum variance of major - minor.
      let majorCount = 0;
      let minorCount = 0;

      // The remaining minor in the rest of s.
      let remainMinor = counter[minor];

      for (let i = 0; i < n; i++) {
        const index = codes[i];
        if (index === major) {
          majorCount++;
        } else if (index === minor) {
          minorCount++;
          remainMinor--;
        }

        // Only update the variance if there is at least one minor.
        if (minorCount > 0) {
          globalMax = Math.max(globalMax, majorCount - minorCount);
        }

        // We can discard the previous string if there is at least one remaining minor.
        if (majorCount < minorCount && remainMinor > 0) {
          majorCount = 0;
          minorCount = 0;
        }
      }
    }
  }

  return globalMax;
};

var s = 'aababbb';
var expected = 3;
var result = largestVariance(s);
console.log(result, result === expected);

var s = 'abcde';
var expected = 0;
var result = largestVariance(s);
console.log(result, result === expected);
