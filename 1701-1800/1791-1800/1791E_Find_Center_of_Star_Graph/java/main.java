// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/description/
// T.C: O(1)
// S.C: O(1)

// java main.java
class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    int[][] edges = new int[][] { { 1, 2 }, { 2, 3 }, { 4, 2 } };
    int expected = 2;
    int result = solution.findCenter(edges);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    edges = new int[][] { { 1, 2 }, { 5, 1 }, { 1, 3 }, { 1, 4 } };
    expected = 1;
    result = solution.findCenter(edges);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    edges =
      new int[][] {
        { 1, 18 },
        { 18, 2 },
        { 3, 18 },
        { 18, 4 },
        { 18, 5 },
        { 6, 18 },
        { 18, 7 },
        { 18, 8 },
        { 18, 9 },
        { 18, 10 },
        { 18, 11 },
        { 12, 18 },
        { 18, 13 },
        { 18, 14 },
        { 15, 18 },
        { 16, 18 },
        { 17, 18 },
      };
    expected = 18;
    result = solution.findCenter(edges);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {

  public int findCenter(int[][] edges) {
    int a = edges[0][0];
    int b = edges[0][1];
    int u = edges[1][0];
    int v = edges[1][1];
    if (a == u || a == v) return a;
    if (b == u || b == v) return b;
    return 0;
  }
}
