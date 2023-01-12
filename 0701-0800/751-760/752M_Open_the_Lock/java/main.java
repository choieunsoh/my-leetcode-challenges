import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

// 752. Open the Lock
// https://leetcode.com/problems/open-the-lock/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();

    String[] deadends = new String[] { "0201", "0101", "0102", "1212", "2002" };
    String target = "0202";
    int expected = 6;
    int result = solution.openLock(deadends, target);
    System.out.println(result);
    System.out.println(result == expected);
  }
}

class Solution {
  public int openLock(String[] deadends, String target) {
    HashSet<String> visited = new HashSet<>(Arrays.asList(deadends));
    if (visited.contains(target)) {
      return -1;
    }

    int turns = 0;
    Queue<String> q = new LinkedList<>();
    if (!visited.contains("0000")) {
      visited.add("0000");
      q.add("0000");
    }

    while (!q.isEmpty()) {
      final int size = q.size();
      for (int i = 0; i < size; i++) {
        String current = q.remove();
        if (current.equals(target)) {
          return turns;
        }
        for (int j = 0; j < 4; j++) {
          String[] nextTurns = this.getTurns(current, j);
          for (String next : nextTurns) {
            if (!visited.contains(next)) {
              visited.add(next);
              q.add(next);
            }
          }
        }
      }
      turns++;
    }

    return -1;
  }

  private String[] getTurns(String current, int pos) {
    String next = this.plusOne(current, pos);
    String prev = this.minusOne(current, pos);
    return new String[] { next, prev };
  }

  private String plusOne(String current, int pos) {
    char[] charArray = current.toCharArray();
    if (charArray[pos] == '9') {
      charArray[pos] = '0';
    } else {
      charArray[pos] = (char) (charArray[pos] + 1);
    }
    return new String(charArray);
  }

  private String minusOne(String current, int pos) {
    char[] charArray = current.toCharArray();
    if (charArray[pos] == '0') {
      charArray[pos] = '9';
    } else {
      charArray[pos] = (char) (charArray[pos] - 1);
    }
    return new String(charArray);
  }
}