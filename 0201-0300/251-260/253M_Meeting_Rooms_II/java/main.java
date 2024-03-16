// 253. Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/
// T.C.: O(N log N)
// S.C.: O(N)

// java main.java

import java.util.Arrays;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[][] intervals = { { 0, 30 }, { 5, 10 }, { 15, 20 } };
    int expected = 2;
    int result = solution.minMeetingRooms(intervals);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    intervals = new int[][] { { 7, 10 }, { 2, 4 } };
    expected = 1;
    result = solution.minMeetingRooms(intervals);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    intervals = new int[][] { { 2, 11 }, { 6, 16 }, { 11, 16 } };
    expected = 2;
    result = solution.minMeetingRooms(intervals);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int minMeetingRooms(int[][] intervals) {
    int usedRooms = 0;
    int startIndex = 0;
    int endIndex = 0;

    int[] startIntervals = Arrays.stream(intervals).mapToInt(interval -> interval[0]).toArray();
    Arrays.sort(startIntervals);
    int[] endIntervals = Arrays.stream(intervals).mapToInt(interval -> interval[1]).toArray();
    Arrays.sort(endIntervals);

    while (startIndex < intervals.length) {
      if (startIntervals[startIndex] >= endIntervals[endIndex]) {
        usedRooms--;
        endIndex++;
      }
      usedRooms++;
      startIndex++;
    }

    return usedRooms;
  }
}
