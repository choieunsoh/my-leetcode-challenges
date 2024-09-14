// 2419. Longest Subarray With Maximum Bitwise AND
// https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/description/
// T.C.: O(n)
// S.C.: O(1)
import kotlin.math.max
class Solution {
  fun longestSubarray(nums: IntArray): Int {
    var maxNum = 0
    var maxCount = 0
    var count = 0
    for (num in nums) {
      if (num > maxNum) {
        maxNum = num
        count = 0
        maxCount = 0
      }

      count = if (num == maxNum) count + 1 else 0
      maxCount = max(maxCount, count)
    }
    return maxCount
  }
}

fun main() {
  val solution = Solution()

  var nums = intArrayOf(1, 2, 3, 3, 2, 2)
  var expected = 2
  var result = solution.longestSubarray(nums)
  println("$result -> ${result == expected}");

  nums = intArrayOf(1, 2, 3, 4)
  expected = 1
  result = solution.longestSubarray(nums)
  println("$result -> ${result == expected}");

  nums = intArrayOf(3, 3, 3, 3)
  expected = 4
  result = solution.longestSubarray(nums)
  println("$result -> ${result == expected}");

  nums = intArrayOf(13, 13, 13, 3, 3, 3, 3, 15, 15, 15)
  expected = 3
  result = solution.longestSubarray(nums)
  println("$result -> ${result == expected}");
}
