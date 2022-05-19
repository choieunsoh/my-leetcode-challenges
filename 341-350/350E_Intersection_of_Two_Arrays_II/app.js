// https://leetcode.com/problems/intersection-of-two-arrays-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const result = nums1.filter((num) => {
    const index = nums2.indexOf(num);
    if (index === -1) return false;

    nums2.splice(index, 1);
    return true;
  });

  return result;
};

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2).join(' '));

var nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2).join(' '));

var nums1 = [3, 1, 2],
  nums2 = [(1, 1)];
console.log(intersect(nums1, nums2).join(' '));
