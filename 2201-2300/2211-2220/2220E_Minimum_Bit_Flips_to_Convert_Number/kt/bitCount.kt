// 2220. Minimum Bit Flips to Convert Number
// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/
// T.C.: O(1)
// S.C.: O(1)
class Solution {
  fun minBitFlips(start: Int, goal: Int): Int {
    return Integer.bitCount(start xor goal)
  }
}

fun main() {
  var start = 10
  var goal = 7
  var expected = 3
  var result = Solution().minBitFlips(start, goal)
  println("$result -> ${result == expected}")

  start = 3
  goal = 4
  expected = 3
  result = Solution().minBitFlips(start, goal)
  println("$result -> ${result == expected}")
}