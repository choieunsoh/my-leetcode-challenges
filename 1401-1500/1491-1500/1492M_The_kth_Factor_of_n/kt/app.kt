// 1492. The kth Factor of n
// https://leetcode.com/problems/the-kth-factor-of-n/description/
// T.C.: O(n)
// S.C.: O(1)
class Solution {
  fun kthFactor(n: Int, k: Int): Int {
    var index = k
    for (i in 1..n) {
      if (n % i == 0) {
        index--
        if (index == 0) return i
      }
    }
    return -1
  }
}

fun main() {
  val solution = Solution()

  var n = 12
  var k = 3
  var expected = 3
  var result = solution.kthFactor(n, k)
  println("${result} -> ${result == expected}")

  n = 7
  k = 2
  expected = 7
  result = solution.kthFactor(n, k)
  println("${result} -> ${result == expected}")

  n = 4
  k = 4
  expected = -1
  result = solution.kthFactor(n, k)
  println("${result} -> ${result == expected}")
}
