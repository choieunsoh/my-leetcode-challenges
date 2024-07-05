// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} freq
 * @return {number}
 */
function taskOfParing(freq) {
  let totalPairs = 0;
  for (let i = 0; i < freq.length; i++) {
    const pairs = (freq[i] / 2) | 0;
    totalPairs += pairs;

    if (i + 1 < freq.length) {
      freq[i + 1] += freq[i] % 2;
    }
  }

  return totalPairs;
}

var freq = [2, 4, 3, 1];
var expected = 5;
var result = taskOfParing(freq);
console.log(result, result === expected);

var freq = [3, 5, 4, 3];
var expected = 7;
var result = taskOfParing(freq);
console.log(result, result === expected);

var freq = [5, 6, 2];
var expected = 6;
var result = taskOfParing(freq);
console.log(result, result === expected);
