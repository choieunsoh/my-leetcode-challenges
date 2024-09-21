// 1684. Count the Number of Consistent Strings
// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
// T.C.: O(m+n*k)
// S.C.: O(m)
class Solution {
  fun countConsistentStrings(allowed: String, words: Array<String>): Int {
    val allowedSet = allowed.toSet()
    var count = 0
    for (word in words) {
      var isConsistent = true
      for (char in word) {
        if (!allowedSet.contains(char)) {
          isConsistent = false
          break
        }
      }
      if (isConsistent) {
        count++
      }
    }
    return count
  }
}

fun main() {
  var allowed = "ab"
  var words = arrayOf("ad", "bd", "aaab", "baa", "badab")
  var expected = 2
  var result = Solution().countConsistentStrings(allowed, words)
  println("$result -> ${result == expected}")

  allowed = "abc"
  words = arrayOf("a", "b", "c", "ab", "ac", "bc", "abc")
  expected = 7
  result = Solution().countConsistentStrings(allowed, words)
  println("$result -> ${result == expected}")

  allowed = "cad"
  words = arrayOf("cc", "acd", "b", "ba", "bac", "bad", "ac", "d")
  expected = 4
  result = Solution().countConsistentStrings(allowed, words)
  println("$result -> ${result == expected}")
}