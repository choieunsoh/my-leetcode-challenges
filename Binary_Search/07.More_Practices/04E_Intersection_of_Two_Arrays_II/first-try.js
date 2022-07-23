// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// 350. Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const N = Math.max(nums1.length, nums2.length);
  const map1 = {};
  const map2 = {};
  const result = [];

  while (nums1.length && nums2.length) {
    const num1 = nums1.shift();
    if (map1[num1] === undefined) map1[num1] = 0;
    map1[num1]++;

    const num2 = nums2.shift();
    if (map2[num2] === undefined) map2[num2] = 0;
    map2[num2]++;
  }

  while (nums1.length) {
    const num1 = nums1.shift();
    if (map1[num1] === undefined) map1[num1] = 0;
    map1[num1]++;
  }

  while (nums2.length) {
    const num2 = nums2.shift();
    if (map2[num2] === undefined) map2[num2] = 0;
    map2[num2]++;
  }

  for (const num in map1) {
    //console.log(num, map1[num], map2[num]);
    while (map1[num] && map2[num]) {
      map1[num]--;
      map2[num]--;
      result.push(num);
    }
  }

  return result;
};

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2).join(' '));

var nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2).join(' '));
