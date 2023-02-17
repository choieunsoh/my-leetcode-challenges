// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
var intersect = function (nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const map = new Map<number, number>();
  for (const num of nums1) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  for (const num of nums2) {
    if (!map.has(num)) continue;
    const count = map.get(num)!;
    if (count === 1) {
      map.delete(num);
    } else {
      map.set(num, count - 1);
    }
    result.push(num);
  }
  return result;
};

var nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
var expected = [2, 2];
var result = intersect(nums1, nums2);
console.log(result, result.join() === expected.join());

var nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
var expected = [9, 4];
var result = intersect(nums1, nums2);
console.log(result, result.join() === expected.join());

var nums1 = [3, 1, 2],
  nums2 = [1, 1];
var expected = [1];
var result = intersect(nums1, nums2);
console.log(result, result.join() === expected.join());
