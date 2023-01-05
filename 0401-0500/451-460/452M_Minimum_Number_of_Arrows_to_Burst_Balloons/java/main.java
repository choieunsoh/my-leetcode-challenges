import java.util.Arrays;

// 452. Minimum Number of Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int[][] points = new int[][] {
        { 10, 16 },
        { 2, 8 },
        { 1, 6 },
        { 7, 12 },
    };
    int expected = 2;
    int result = solution.findMinArrowShots(points);
    System.out.printf("%d %s\n", result, result == expected);

    points = new int[][] {
        { 1, 2 },
        { 3, 4 },
        { 5, 6 },
        { 7, 8 }
    };
    expected = 4;
    result = solution.findMinArrowShots(points);
    System.out.printf("%d %s\n", result, result == expected);

    points = new int[][] {
        { 1, 2 },
        { 2, 3 },
        { 3, 4 },
        { 4, 5 },
    };
    expected = 2;
    result = solution.findMinArrowShots(points);
    System.out.printf("%d %s\n", result, result == expected);

    points = new int[][] {
        { -2147483646, -2147483645 },
        { 2147483646, 2147483647 },
    };
    expected = 2;
    result = solution.findMinArrowShots(points);
    System.out.printf("%d %s\n", result, result == expected);
  }
}

class Solution {
  public int findMinArrowShots(int[][] points) {
    int arrows = 1;
    Arrays.sort(points, (a, b) -> a[1] == b[1] ? Integer.compare(a[0], b[0]) : Integer.compare(a[1], b[1]));
    int end = points[0][1];
    for (int i = 1; i < points.length; i++) {
      if (points[i][0] > end) {
        end = points[i][1];
        arrows++;
      }
    }

    return arrows;
  }
}