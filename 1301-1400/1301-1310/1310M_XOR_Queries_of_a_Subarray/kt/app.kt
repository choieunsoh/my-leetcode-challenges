// 1310. XOR Queries of a Subarray
// https://leetcode.com/problems/xor-queries-of-a-subarray/
// T.C.: O(n)
// S.C.: O(n)
class Solution {
  fun xorQueries(arr: IntArray, queries: Array<IntArray>): IntArray {
    val n = arr.count()
    val prefixXOR: IntArray = IntArray(n + 1)
    for ((i, num) in arr.withIndex()) {
      prefixXOR[i + 1] = prefixXOR[i] xor num
    }

    val result: IntArray = IntArray(queries.count())
    for ((index, query) in queries.withIndex()) {
      val (startIndex, endIndex) = query
      result[index] = prefixXOR[startIndex] xor prefixXOR[endIndex + 1]
    }
    return result
  }
}

fun main() {
  var arr = intArrayOf(1, 3, 4, 8)
  var queries = arrayOf(intArrayOf(0, 1), intArrayOf(1, 2), intArrayOf(0, 3), intArrayOf(3, 3))
  var expected = intArrayOf(2, 7, 14, 8)
  var result = Solution().xorQueries(arr, queries)
  println("[${result.joinToString()}] -> ${result.contentEquals(expected)}")

  arr = intArrayOf(4, 8, 2, 10)
  queries = arrayOf(intArrayOf(2, 3), intArrayOf(1, 3), intArrayOf(0, 0), intArrayOf(0, 3))
  expected = intArrayOf(8, 0, 4, 4)
  result = Solution().xorQueries(arr, queries)
  println("[${result.joinToString()}] -> ${result.contentEquals(expected)}")

  arr = intArrayOf(15, 8, 8, 8, 15)
  queries = arrayOf(intArrayOf(2, 2), intArrayOf(3, 3))
  expected = intArrayOf(8, 8)
  result = Solution().xorQueries(arr, queries)
  println("[${result.joinToString()}] -> ${result.contentEquals(expected)}")

  arr = intArrayOf(11, 14, 7)
  queries = arrayOf(intArrayOf(1, 2))
  expected = intArrayOf(9)
  result = Solution().xorQueries(arr, queries)
  println("[${result.joinToString()}] -> ${result.contentEquals(expected)}")

  arr = intArrayOf(16)
  queries = arrayOf(intArrayOf(0, 0), intArrayOf(0, 0), intArrayOf(0, 0))
  expected = intArrayOf(16, 16, 16)
  result = Solution().xorQueries(arr, queries)
  println("[${result.joinToString()}] -> ${result.contentEquals(expected)}")
}