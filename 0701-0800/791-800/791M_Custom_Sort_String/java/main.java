// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/description/
// T.C.: O(n)
// S.C.: O(n)
import java.util.HashMap;
import java.util.Map;

// java main.java
class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    String order = "cba";
    String s = "abcd";
    String expected = "cbad";
    String result = solution.customSortString(order, s);
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));

    order = "bcafg";
    s = "abcd";
    expected = "bcad";
    result = solution.customSortString(order, s);
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));
  }
}

class Solution {

  public String customSortString(String order, String s) {
    Map<Character, Integer> freq = new HashMap<>();

    int N = s.length();
    for (int i = 0; i < N; i++) {
      char letter = s.charAt(i);
      freq.put(letter, freq.getOrDefault(letter, 0) + 1);
    }

    int K = order.length();
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < K; i++) {
      char letter = order.charAt(i);
      while (freq.getOrDefault(letter, 0) > 0) {
        result.append(letter);
        freq.put(letter, freq.get(letter) - 1);
      }
    }

    for (char letter : freq.keySet()) {
      int count = freq.get(letter);
      while (count > 0) {
        result.append(letter);
        count--;
      }
    }

    return result.toString();
  }
}
