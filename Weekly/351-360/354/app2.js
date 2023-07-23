/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  const pref = new Array(100005).fill(0);
  for (const x of nums) {
    pref[Math.max(x - k, 0)]++;
    pref[Math.min(x + k + 1, 100004)]--;
  }
  for (let i = 1; i < pref.length; i++) {
    pref[i] += pref[i - 1];
  }
  return Math.max(...pref);
};

var nums = [4, 6, 1, 2],
  k = 2;
var expected = 3;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 1],
  k = 10;
var expected = 4;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [4, 6, 11, 12],
  k = 2;
var expected = 2;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [5, 57, 46],
  k = 15;
var expected = 2;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [48, 93, 96, 19],
  k = 24;
var expected = 3;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);

var nums = [51, 91, 92, 16, 65],
  k = 27;
var expected = 4;
var result = maximumBeauty(nums, k);
console.log(result, result === expected);
