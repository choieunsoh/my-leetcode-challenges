import java.util.HashMap;

// https://leetcode.com/problems/word-pattern/
// 290. Word Pattern
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    String[][] testCases = { { "abba", "dog cat cat dog" }, { "abba", "dog cat cat fish" },
        { "aaaa", "dog cat cat dog" }, { "abba", "dog dog dog dog" } };
    boolean[] answers = { true, false, false, false };

    for (int i = 0; i < testCases.length; i++) {
      String[] test = testCases[i];
      String pattern = test[0];
      String s = test[1];
      boolean expected = answers[i];
      boolean result = solution.wordPattern(pattern, s);
      System.out.printf("%s %s %s\n", result, expected, result == expected);
    }
  }
}

class Solution {
  public boolean wordPattern(String pattern, String s) {
    String[] words = s.split(" ");
    if (words.length != pattern.length())
      return false;

    HashMap<Character, String> charPattern = new HashMap<>();
    for (int i = 0; i < pattern.length(); i++) {
      String word = words[i];
      Character ch = pattern.charAt(i);
      if (charPattern.containsKey(ch)) {
        if (!charPattern.get(ch).equals(word))
          return false;
      } else {
        if (charPattern.containsValue(word))
          return false;
        charPattern.put(ch, word);
      }
    }
    return true;
  }
}