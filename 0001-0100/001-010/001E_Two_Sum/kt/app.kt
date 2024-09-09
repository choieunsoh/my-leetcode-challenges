// 1. Two Sum
// https://leetcode.com/problems/two-sum/
// T.C.: O(n)
// S.C.: O(n)
class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
      val seen = mutableMapOf<Int, Int>();
      for (i in nums.indices) {
        val complement = target - nums[i];
        if (seen.containsKey(complement)) {
          return intArrayOf(seen[complement]!!, i);
        }
        seen[nums[i]] = i
      }
      return intArrayOf();
    }
}

fun main() {
  var nums = intArrayOf(2, 7, 11, 15);
  var target = 9;
  var expected = intArrayOf(0, 1);
  var result = Solution().twoSum(nums, target);
  println("${result.contentToString()} => ${result.contentToString() == expected.contentToString()}");

  nums = intArrayOf(3, 4, 9, 2);
  target = 11;
  expected = intArrayOf(2, 3);
  result = Solution().twoSum(nums, target);
  println("${result.contentToString()} => ${result.contentToString() == expected.contentToString()}");

  nums = intArrayOf(3, 2, 4);
  target = 6;
  expected = intArrayOf(1, 2);
  result = Solution().twoSum(nums, target);
  println("${result.contentToString()} => ${result.contentToString() == expected.contentToString()}");

  nums = intArrayOf(3, 6);
  target = 6;
  expected = intArrayOf();
  result = Solution().twoSum(nums, target);
  println("${result.contentToString()} => ${result.contentToString() == expected.contentToString()}");
}