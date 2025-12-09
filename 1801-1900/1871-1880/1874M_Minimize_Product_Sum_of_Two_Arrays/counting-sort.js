// 1874. Minimize Product Sum of Two Arrays
// https://leetcode.com/problems/minimize-product-sum-of-two-arrays/description/
// T.C.: O(n+k)
// S.C.: O(k)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function (nums1, nums2) {
  // Initialize counter1 and counter2.
  const counter1 = new Array(101).fill(0);
  const counter2 = new Array(101).fill(0);

  // Record the number of occurrence of elements in nums1 and nums2.
  for (const num of nums1) {
    counter1[num]++;
  }
  for (const num of nums2) {
    counter2[num]++;
  }

  // Initialize two pointers p1 = 1, p2 = 100.
  // Stands for counter1[1] and counter2[100], respectively.
  let p1 = 0;
  let p2 = 100;
  let product = 0;
  let occ;

  // While the two pointers are in the valid range.
  while (p1 < 101 && p2 > 0) {
    // If counter1[p1] == 0, meaning there is no element equals p1 in counter1,
    // thus we shall increment p1 by 1.
    while (p1 < 101 && counter1[p1] == 0) p1 += 1;

    // If counter2[p2] == 0, meaning there is no element equals p2 in counter2,
    // thus we shall decrement p2 by 1.
    while (p2 > 0 && counter2[p2] == 0) p2 -= 1;

    // If any of the pointer goes beyond the border, we have finished the
    // iteration, break the loop.
    if (p1 == 101 || p2 == 0) break;

    // Otherwise, we can make at most min(counter1[p1], counter2[p2])
    // pairs {p1, p2} from nums1 and nums2, let's call it occ.
    // Each pair has product of p1 * p2, thus the cumulative sum is
    // increased by occ * p1 * p2. Update counter1[p1] and counter2[p2].
    occ = Math.min(counter1[p1], counter2[p2]);
    product += occ * p1 * p2;
    counter1[p1] -= occ;
    counter2[p2] -= occ;
  }

  // Once we finish the loop, return ans as the product sum.
  return product;
};

var nums1 = [5, 3, 4, 2],
  nums2 = [4, 2, 2, 5];
var expected = 40;
var result = minProductSum(nums1, nums2);
console.log(result, result === expected);

var nums1 = [2, 1, 4, 5, 7],
  nums2 = [3, 2, 4, 8, 6];
var expected = 65;
var result = minProductSum(nums1, nums2);
console.log(result, result === expected);
