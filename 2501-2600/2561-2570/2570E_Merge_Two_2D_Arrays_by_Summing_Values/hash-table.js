// 2570. Merge Two 2D Arrays by Summing Values
// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
// T.C.: O((n+m) log (n+m))
// S.C.: O(n+m)
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const keyToSum = new Map();
  for (const [id, num] of nums1) {
    keyToSum.set(id, num);
  }
  for (const [id, num] of nums2) {
    keyToSum.set(id, (keyToSum.get(id) ?? 0) + num);
  }

  const result = [];
  for (const [id, num] of keyToSum) {
    result.push([id, num]);
  }

  return result.sort((a, b) => a[0] - b[0]);
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
