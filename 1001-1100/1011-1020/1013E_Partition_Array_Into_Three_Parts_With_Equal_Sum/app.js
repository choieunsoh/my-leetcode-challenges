// 1013. Partition Array Into Three Parts With Equal Sum
// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const sum = arr.reduce((sum, num) => sum + num, 0);
  if (sum % 3 !== 0) return false;

  const groupSum = sum / 3;
  let index = 0;
  let currSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum === groupSum) {
      count++;
      currSum = 0;
    }
  }
  return count >= 3;
};

var arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
var expected = true;
var result = canThreePartsEqualSum(arr);
console.log(result, result === expected);

var arr = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
var expected = false;
var result = canThreePartsEqualSum(arr);
console.log(result, result === expected);

var arr = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4];
var expected = true;
var result = canThreePartsEqualSum(arr);
console.log(result, result === expected);

var arr = [0, 0, 0, 0];
var expected = true;
var result = canThreePartsEqualSum(arr);
console.log(result, result === expected);
