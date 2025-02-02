/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    counts[c - a]++;
  }

  let maxOdd = 0;
  let minEven = s.length;
  for (let i = 0; i < 26; i++) {
    if (counts[i] === 0) continue;
    if (counts[i] % 2 === 1) {
      maxOdd = Math.max(maxOdd, counts[i]);
    } else {
      minEven = Math.min(minEven, counts[i]);
    }
  }
  return maxOdd - minEven;
};

var s = 'aaaaabbc';
var expected = 3;
var result = maxDifference(s);
console.log(result, result === expected);

var s = 'abcabcab';
var expected = 1;
var result = maxDifference(s);
console.log(result, result === expected);
