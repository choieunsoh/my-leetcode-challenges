// 852. Peak Index in a Mountain Array
// https://seanprashad.com/leetcode-patterns/
var peakIndexInMountainArray = function (arr: number[]): number {
  if (arr.length === 3) return 1;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

var arr = [0, 1, 0];
var expected1 = 1;
var result1 = peakIndexInMountainArray(arr);
console.log(result1, expected1, result1 === expected1);

var arr = [0, 2, 1, 0];
var expected1 = 1;
var result1 = peakIndexInMountainArray(arr);
console.log(result1, expected1, result1 === expected1);

var arr = [0, 10, 5, 2];
var expected1 = 1;
var result1 = peakIndexInMountainArray(arr);
console.log(result1, expected1, result1 === expected1);

var arr = [0, 1, 5, 8, 3, 2];
var expected1 = 3;
var result1 = peakIndexInMountainArray(arr);
console.log(result1, expected1, result1 === expected1);

var arr = [0, 10, 5, 4, 3, 2];
var expected1 = 1;
var result1 = peakIndexInMountainArray(arr);
console.log(result1, expected1, result1 === expected1);
