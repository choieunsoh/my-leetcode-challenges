// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
function longestSubarray(arr) {
  const n = arr.length;
  let longest = 0;
  let left = 0;
  const counts = new Map();
  for (let right = 0; right < n; right++) {
    counts.set(arr[right], (counts.get(arr[right]) ?? 0) + 1);

    while (counts.size > 2) {
      counts.set(arr[left], counts.get(arr[left]) - 1);
      if (counts.get(arr[left]) === 0) {
        counts.delete(arr[left]);
      }
      left++;
    }

    if (counts.size <= 2) {
      const [first, second = first] = counts.keys();
      const diff = Math.abs(first - second);
      if (diff <= 1) {
        longest = Math.max(longest, right - left + 1);
      }
    }
  }
  return longest;
}

var arr = [0, 1, 2, 1, 2, 3];
var expected = 4;
var result = longestSubarray(arr);
console.log(result, result === expected);

var arr = [1, 1, 1, 3, 3, 2, 2];
var expected = 4;
var result = longestSubarray(arr);
console.log(result, result === expected);

var arr = [1, 2, 3, 4, 5];
var expected = 2;
var result = longestSubarray(arr);
console.log(result, result === expected);

var arr = [2, 2, 1];
var expected = 3;
var result = longestSubarray(arr);
console.log(result, result === expected);

var arr = [2, 2, 2];
var expected = 3;
var result = longestSubarray(arr);
console.log(result, result === expected);

var arr = [222];
var expected = 1;
var result = longestSubarray(arr);
console.log(result, result === expected);

var arr = [1, 2, 2, 1, 1, 3, 3];
var expected = 5;
var result = longestSubarray(arr);
console.log(result, result === expected);
