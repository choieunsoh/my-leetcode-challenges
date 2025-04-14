// 3514. Number of Unique XOR Triplets II
// https://leetcode.com/problems/number-of-unique-xor-triplets-ii/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var uniqueXorTriplets = function (arr) {
  const n = arr.length;
  let freq = new Array(2048).fill(false);
  let len = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (!freq[arr[i] ^ arr[j]]) {
        len++;
      }
      freq[arr[i] ^ arr[j]] = true;
    }
  }

  let idx = 0;
  const nums = new Array(len).fill(0);
  for (let i = 0; i < 2048; i++) {
    if (freq[i]) {
      nums[idx++] = i;
    }
  }

  freq = new Array(2048).fill(false);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < n; j++) {
      freq[nums[i] ^ arr[j]] = true;
    }
  }

  return freq.reduce((acc, b) => acc + (b ? 1 : 0), 0);
};

var nums = [1, 3];
var expected = 2;
var result = uniqueXorTriplets(nums);
console.log(result, result === expected);

var nums = [6, 7, 8, 9];
var expected = 4;
var result = uniqueXorTriplets(nums);
console.log(result, result === expected);
