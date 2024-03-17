// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/
// T.C.: O(n)
// S.C.: O(1)

// java main.java

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[][] intervals = new int[][] { { 1, 3 }, { 6, 9 } };
    int[] newInterval = new int[] { 2, 5 };
    int[][] expected = new int[][] { { 1, 5 }, { 6, 9 } };
    int[][] result = solution.insert(intervals, newInterval);
    System.out.println(result + " " + (Arrays.deepEquals(expected, result) ? "true" : "false"));

    intervals = new int[][] { { 1, 2 }, { 3, 5 }, { 6, 7 }, { 8, 10 }, { 12, 16 } };
    newInterval = new int[] { 4, 8 };
    expected = new int[][] { { 1, 2 }, { 3, 10 }, { 12, 16 } };
    result = solution.insert(intervals, newInterval);
    System.out.println(result + " " + (Arrays.deepEquals(expected, result) ? "true" : "false"));

    intervals = new int[][] { { 1, 3 }, { 6, 9 } };
    newInterval = new int[] { 3, 5 };
    expected = new int[][] { { 1, 5 }, { 6, 9 } };
    result = solution.insert(intervals, newInterval);
    System.out.println(result + " " + (Arrays.deepEquals(expected, result) ? "true" : "false"));

    intervals = new int[][] { { 1, 3 }, { 6, 9 } };
    newInterval = new int[] { 9, 15 };
    expected = new int[][] { { 1, 3 }, { 6, 15 } };
    result = solution.insert(intervals, newInterval);
    System.out.println(result + " " + (Arrays.deepEquals(expected, result) ? "true" : "false"));

    intervals = new int[][] { { 1, 3 }, { 6, 9 } };
    newInterval = new int[] { 11, 15 };
    expected = new int[][] { { 1, 3 }, { 6, 9 }, { 11, 15 } };
    result = solution.insert(intervals, newInterval);
    System.out.println(result + " " + (Arrays.deepEquals(expected, result) ? "true" : "false"));
  }
}

class Solution {

  public int[][] insert(int[][] intervals, int[] newInterval) {
    List<int[]> result = new ArrayList<>();
    for (int i = 0; i < intervals.length; i++) {
      if (newInterval[1] < intervals[i][0]) {
        result.add(newInterval);
        for (int j = i; j < intervals.length; j++) {
          result.add(intervals[j]);
        }
        return result.toArray(new int[result.size()][]);
      } else if (newInterval[0] > intervals[i][1]) {
        result.add(intervals[i]);
      } else {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      }
    }
    result.add(newInterval);
    return result.toArray(new int[result.size()][]);
  }
}
