// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/description/
// T.C: O(1)
// S.C: O(1)
public class Solution
{
  public int FindCenter(int[][] edges)
  {
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1])
    {
      return edges[0][0];
    }
    return edges[0][1];
  }
}

namespace Application
{
  class Program
  {
    static void Main(string[] args)
    {
      Solution solution = new Solution();

      var edges1 = new int[][] {
            new int[] {1, 2},
            new int[] {2, 3},
            new int[] {4, 2}
        };
      var expected1 = 2;
      var result1 = solution.FindCenter(edges1);
      Console.WriteLine("{0} {1}", result1, result1 == expected1);

      var edges2 = new int[][] {
            new int[] {1, 2},
            new int[] {5, 1},
            new int[] {1, 3},
            new int[] {1, 4}
        };
      var expected2 = 1;
      var result2 = solution.FindCenter(edges2);
      Console.WriteLine("{0} {1}", result2, result2 == expected2);

      var edges3 = new int[][] {
            new int[] {1, 18},
            new int[] {18, 2},
            new int[] {3, 18},
            new int[] {18, 4},
            new int[] {18, 5},
            new int[] {6, 18},
            new int[] {18, 7},
            new int[] {18, 8},
            new int[] {18, 9},
            new int[] {18, 10},
            new int[] {18, 11},
            new int[] {12, 18},
            new int[] {18, 13},
            new int[] {18, 14},
            new int[] {15, 18},
            new int[] {16, 18},
            new int[] {17, 18}
        };
      var expected3 = 18;
      var result3 = solution.FindCenter(edges3);
      Console.WriteLine("{0} {1}", result3, result3 == expected3);
    }
  }
}
