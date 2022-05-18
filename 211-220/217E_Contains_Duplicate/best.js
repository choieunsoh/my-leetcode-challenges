/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const found = new Set();
  for (const num of nums) {
    if (found.has(num)) return true;
    found.add(num);
  }
  return false;
};
