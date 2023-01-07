import java.util.ArrayList;
import java.util.List;

// 131. Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    List<List<String>> result = solution.partition("aab");
    for (List<String> words : result) {
      System.out.println(String.join(" ", words));
    }
  }
}

class Solution {
  public List<List<String>> partition(String s) {
    List<List<String>> result = new ArrayList<List<String>>();
    dfs(0, s, new ArrayList<String>(), result);
    return result;
  }

  private void dfs(int start, String s, List<String> parts, List<List<String>> result) {
    if (start == s.length()) {
      List<String> list = new ArrayList<String>(parts);
      result.add(list);
      return;
    }

    for (int i = start; i < s.length(); i++) {
      String word = s.substring(start, i + 1);
      if (!isPalindrome(word)) {
        continue;
      }

      parts.add(word);
      dfs(i + 1, s, parts, result);
      parts.remove(parts.size() - 1);
    }
  }

  private Boolean isPalindrome(String word) {
    int left = 0;
    int right = word.length() - 1;
    while (left < right) {
      if (word.charAt(left) != word.charAt(right)) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}