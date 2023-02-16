// 1523. Count Odd Numbers in an Interval Range
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
class Main {
  public static void main(String[] args) {
    int low = 3;
    int high = 7;
    int expected = 3;
    int result = Solution.countOdds(low, high);
    System.out.println(result == expected);

    low = 8;
    high = 10;
    expected = 1;
    result = Solution.countOdds(low, high);
    System.out.println(result == expected);

    low = 7;
    high = 7;
    expected = 1;
    result = Solution.countOdds(low, high);
    System.out.println(result == expected);

    low = 10;
    high = 10;
    expected = 0;
    result = Solution.countOdds(low, high);
    System.out.println(result == expected);
  }
}

class Solution {
  public static int countOdds(int low, int high) {
    final int diff = (high - low) >> 1;
    return (low & 1) == 1 || (high & 1) == 1 ? diff + 1 : diff;
  }
}
