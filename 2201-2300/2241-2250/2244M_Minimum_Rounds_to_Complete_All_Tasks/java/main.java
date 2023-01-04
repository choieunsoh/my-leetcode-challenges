import java.util.HashMap;

// 2244. Minimum Rounds to Complete All Tasks
// https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] tasks = { 2, 2, 3, 3, 2, 4, 4, 4, 4, 4 };
    int expected = 4;
    int result = solution.minimumRounds(tasks);
    System.out.printf("%d %s\n", result, result == expected);

    tasks = new int[] { 2, 3, 3 };
    expected = -1;
    result = solution.minimumRounds(tasks);
    System.out.printf("%d %s\n", result, result == expected);
  }
}
class Solution {
    public int minimumRounds(int[] tasks) {
      int rounds = 0;
      HashMap<Integer, Integer> taskCount = new HashMap<>();
      for (int task : tasks) {
        int count = taskCount.getOrDefault(task, 0);
        taskCount.put(task, count + 1);
      }
      for (int count : taskCount.values()) {
        if (count == 1) {
          return -1;
        }
        rounds += count / 3;
        if (count % 3 != 0) {
          rounds++;
        }
      }
      return rounds;
    }
}