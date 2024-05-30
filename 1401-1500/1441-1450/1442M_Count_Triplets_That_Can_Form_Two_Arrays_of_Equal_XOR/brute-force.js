// 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let result = 0;
  for (let start = 0; start < arr.length - 1; start++) {
    let xorA = 0;
    for (let mid = start + 1; mid < arr.length; mid++) {
      xorA ^= arr[mid - 1];

      let xorB = 0;
      for (let end = mid; end < arr.length; end++) {
        xorB ^= arr[end];

        if (xorA === xorB) result++;
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
