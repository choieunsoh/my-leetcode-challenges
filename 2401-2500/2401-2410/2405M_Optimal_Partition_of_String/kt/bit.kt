// 2405. Optimal Partition of String
// https://leetcode.com/problems/optimal-partition-of-string/
// T.C.: O(n)
// S.C.: O(1)
class Solution {
  fun partitionString(s: String): Int {
    var count = 1
    var mask = 0
    for (i in s.indices) {
      val ch = s[i] - 'a' + 1
      if (mask and (1 shl ch) != 0) {
        count++
        mask = 0
      }
      mask = mask or (1 shl ch)
    }
    return count
  }
}

fun main() {
  val solution = Solution()

  var s = "abacaba"
  var expected = 4
  var result = solution.partitionString(s)
  println("${result} -> ${result == expected}")

  s = "ssssss"
  expected = 6
  result = solution.partitionString(s)
  println("${result} -> ${result == expected}")
}
