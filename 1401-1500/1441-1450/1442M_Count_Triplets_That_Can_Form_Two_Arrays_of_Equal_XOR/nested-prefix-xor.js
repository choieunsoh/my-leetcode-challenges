// 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let result = 0;
  const prefixXOR = [0, ...arr];
  const n = prefixXOR.length;
  for (let i = 1; i < n; i++) {
    prefixXOR[i] ^= prefixXOR[i - 1];
  }

  for (let start = 0; start < n; start++) {
    for (let end = start + 1; end < n; end++) {
      if (prefixXOR[start] === prefixXOR[end]) {
        result += end - start - 1;
      }
    }
  }

  return result;
};

var arr = [2, 3, 1, 6, 7];
var expected = 4;
var result = countTriplets(arr);
console.log(result, result === expected);

var arr = [1, 1, 1, 1, 1];
var expected = 10;
var result = countTriplets(arr);
console.log(result, result === expected);
