// 2570. Merge Two 2D Arrays by Summing Values
// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    const [id1, num1] = nums1[i];
    const [id2, num2] = nums2[j];
    if (id1 === id2) {
      result.push([id1, num1 + num2]);
      i++;
      j++;
    } else if (id1 < id2) {
      result.push([id1, num1]);
      i++;
    } else {
      result.push([id2, num2]);
      j++;
    }
  }
  if (i < nums1.length) result.push(...nums1.slice(i));
  if (j < nums2.length) result.push(...nums2.slice(j));

  return result;
};

var nums1 = [
    [1, 2],
    [2, 3],
    [4, 5],
  ],
  nums2 = [
    [1, 4],
    [3, 2],
    [4, 1],
  ];
var expected = [
  [1, 6],
  [2, 3],
  [3, 2],
  [4, 6],
];
var result = mergeArrays(nums1, nums2);
console.log(result, result.join() === expected.join());

var nums1 = [
    [2, 4],
    [3, 6],
    [5, 5],
  ],
  nums2 = [
    [1, 3],
    [4, 3],
  ];
var expected = [
  [1, 3],
  [2, 4],
  [3, 6],
  [4, 3],
  [5, 5],
];
var result = mergeArrays(nums1, nums2);
console.log(result, result.join() === expected.join());
