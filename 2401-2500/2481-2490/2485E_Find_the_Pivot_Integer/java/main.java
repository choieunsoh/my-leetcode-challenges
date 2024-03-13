// 2485. Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/
// T.C.: O(log n)
// S.C.: O(1)

// java main.java
class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int n = 8;
    int expected = 6;
    int result = solution.pivotInteger(n);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    n = 1;
    expected = 1;
    result = solution.pivotInteger(n);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    n = 4;
    expected = -1;
    result = solution.pivotInteger(n);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int pivotInteger(int n) {
    int sumOfN = (n + 1) * n / 2;
    int left = 1;
    int right = n;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (mid * mid < sumOfN) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (left * left == sumOfN) {
      return left;
    }
    return -1;
  }
}
