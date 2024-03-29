// 340. Longest Substring with At Most K Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
// T.C.: O(n)
// S.C.: O(k)

import java.util.HashMap;
import java.util.Map;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    String s = "eceba";
    int k = 2;
    long expected = 3;
    long result = solution.lengthOfLongestSubstringKDistinct(s, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));

    s = "aa";
    k = 1;
    expected = 2;
    result = solution.lengthOfLongestSubstringKDistinct(s, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));

    s = "abaccc";
    k = 2;
    expected = 4;
    result = solution.lengthOfLongestSubstringKDistinct(s, k);
    System.out.println(result + " " + (result == expected ? "true" : "false"));
  }
}

class Solution {

  public int lengthOfLongestSubstringKDistinct(String s, int k) {
    int n = s.length();
    int maxSize = 0;
    Map<Character, Integer> counter = new HashMap<>();

    int left = 0;
    for (int right = 0; right < n; right++) {
      counter.put(s.charAt(right), counter.getOrDefault(s.charAt(right), 0) + 1);

      while (counter.size() > k) {
        counter.put(s.charAt(left), counter.get(s.charAt(left)) - 1);
        if (counter.get(s.charAt(left)) == 0) {
          counter.remove(s.charAt(left));
        }
        left++;
      }

      maxSize = Math.max(maxSize, right - left + 1);
    }

    return maxSize;
  }
}
