// https://leetcode.com/problems/delete-columns-to-make-sorted/
// 944. Delete Columns to Make Sorted
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    String[] strs = new String[] { "cba", "daf", "ghi" };
    int expected = 1;
    int result = solution.minDeletionSize(strs);
    System.out.printf("%s %s %s\n", result, expected, result == expected);

    strs = new String[] { "a", "b" };
    expected = 0;
    result = solution.minDeletionSize(strs);
    System.out.printf("%s %s %s\n", result, expected, result == expected);

    strs = new String[] { "zyx", "wvu", "tsr" };
    expected = 3;
    result = solution.minDeletionSize(strs);
    System.out.printf("%s %s %s\n", result, expected, result == expected);

    strs = new String[] { "abcdef" };
    expected = 0;
    result = solution.minDeletionSize(strs);
    System.out.printf("%s %s %s\n", result, expected, result == expected);

    strs = new String[] { "a" };
    expected = 0;
    result = solution.minDeletionSize(strs);
    System.out.printf("%s %s %s\n", result, expected, result == expected);

    strs = new String[] { "a", "b", "d", "c" };
    expected = 1;
    result = solution.minDeletionSize(strs);
    System.out.printf("%s %s %s\n", result, expected, result == expected);

    strs = new String[] { "rrjk", "furt", "guzm" };
    expected = 2;
    result = solution.minDeletionSize(strs);
    System.out.printf("%s %s %s\n", result, expected, result == expected);

  }
}

class Solution {
  public int minDeletionSize(String[] strs) {
    int deleteCount = 0;
    final int wordLength = strs[0].length();
    for (int i = 0; i < wordLength; i++) {
      for (int j = 1; j < strs.length; j++) {
        if (strs[j].charAt(i) < strs[j - 1].charAt(i)) {
          deleteCount++;
          break;
        }
      }
    }
    return deleteCount;
  }
}