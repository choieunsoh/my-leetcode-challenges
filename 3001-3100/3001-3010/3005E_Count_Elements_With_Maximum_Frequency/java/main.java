// 3005. Count Elements With Maximum Frequency
// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// T.C.: O(n)
// S.C.: O(n)

// java main.java
class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[] nums = new int[] { 1, 2, 2, 3, 1, 4 };
    int expected = 4;
    int result = solution.maxFrequencyElements(nums);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { 1, 2, 3, 4, 5 };
    expected = 5;
    result = solution.maxFrequencyElements(nums);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    nums = new int[] { 15 };
    expected = 1;
    result = solution.maxFrequencyElements(nums);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int maxFrequencyElements(int[] nums) {
    int result = 0;
    int maxFreq = 0;
    int[] freq = new int[101];
    for (int num : nums) {
      freq[num]++;
      if (freq[num] == maxFreq) {
        result += maxFreq;
      } else if (freq[num] > maxFreq) {
        maxFreq = freq[num];
        result = maxFreq;
      }
    }
    return result;
  }
}
