import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Stack;

// 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();

    String digits = "23";
    String[] expected = { "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf" };
    List<String> result = solution.letterCombinations(digits);
    Boolean correct = String.join("", expected).equals(String.join("", result));
    System.out.println(correct);

    digits = "999";
    expected = new String[] { "www", "wwx", "wwy", "wwz", "wxw", "wxx", "wxy", "wxz", "wyw", "wyx", "wyy", "wyz", "wzw",
        "wzx", "wzy", "wzz", "xww", "xwx", "xwy", "xwz", "xxw", "xxx", "xxy", "xxz", "xyw", "xyx", "xyy", "xyz", "xzw",
        "xzx", "xzy", "xzz", "yww", "ywx", "ywy", "ywz", "yxw", "yxx", "yxy", "yxz", "yyw", "yyx", "yyy", "yyz", "yzw",
        "yzx", "yzy", "yzz", "zww", "zwx", "zwy", "zwz", "zxw", "zxx", "zxy", "zxz", "zyw", "zyx", "zyy", "zyz", "zzw",
        "zzx", "zzy", "zzz" };
    result = solution.letterCombinations(digits);
    correct = String.join("", expected).equals(String.join("", result));
    System.out.println(correct);
  }
}
class Solution {
  private HashMap<Character, String> phone = new HashMap<>();
  public Solution() {
    phone.put('2', "abc");
    phone.put('3', "def");
    phone.put('4', "ghi");
    phone.put('5', "jkl");
    phone.put('6', "mno");
    phone.put('7', "pqrs");
    phone.put('8', "tuv");
    phone.put('9', "wxyz");
  }

  public List<String> letterCombinations(String digits) {
    List<String> result = new ArrayList<String>();
    if (digits.length() > 0) {
      dfs(0, new Stack<>(), digits, result);
    }
    return result;
  }

  private String join(List<Character> word) {
    StringBuilder sb = new StringBuilder();
    for (Character ch : word) {
      sb.append(ch);
    }
    return sb.toString();
  }
  private void dfs(Integer index, Stack<Character> word, String digits, List<String> result) {
    if (index == digits.length()) {
      result.add(join(word));
      return;
    }

    String letters = phone.get(digits.charAt(word.size()));
    for (int i = 0; i < letters.length(); i++) {
      Character letter = letters.charAt(i);
      word.push(letter);
      dfs(index + 1, word, digits, result);
      word.pop();
    }
  }
}