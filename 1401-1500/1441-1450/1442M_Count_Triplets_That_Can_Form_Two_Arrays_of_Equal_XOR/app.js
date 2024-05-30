// 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let result = 0;
  let prefix = 0;
  const n = arr.length;

  const countMap = new Map();
  const totalMap = new Map();
  countMap.set(0, 1);

  for (let i = 0; i < n; i++) {
    prefix ^= arr[i];
    const count = countMap.get(prefix) ?? 0;
    const total = totalMap.get(prefix) ?? 0;
    result += count * i - total;

    countMap.set(prefix, count + 1);
    totalMap.set(prefix, total + i + 1);
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
