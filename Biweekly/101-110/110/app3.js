/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function (nums) {
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, []);
    }
    map.get(num).push(i);
  }

  let result = n;
  for (const list of map.values()) {
    list.push(list[0] + n);
    let longest = 0;
    for (let i = 1; i < list.length; i++) {
      longest = Math.max(longest, ((list[i] - list[i - 1]) / 2) | 0);
    }
    result = Math.min(result, longest);
  }

  return result;
};

var nums = [1, 2, 3, 4, 5];
var expected = 2;
var result = minimumSeconds(nums);
console.log(result, result === expected);

var nums = [1, 2, 1, 2];
var expected = 1;
var result = minimumSeconds(nums);
console.log(result, result === expected);

var nums = [2, 1, 3, 3, 2];
var expected = 2;
var result = minimumSeconds(nums);
console.log(result, result === expected);

var nums = [5, 5, 5, 5];
var expected = 0;
var result = minimumSeconds(nums);
console.log(result, result === expected);

var nums = [5, 5, 5, 5, 10, 6, 3, 2, 1];
var expected = 3;
var result = minimumSeconds(nums);
console.log(result, result === expected);

var nums = [5, 5, 2, 5, 10, 6, 3, 2, 1];
var expected = 2;
var result = minimumSeconds(nums);
console.log(result, result === expected);

var nums = [8, 8, 9, 10, 9];
var expected = 1;
var result = minimumSeconds(nums);
console.log(result, result === expected);
