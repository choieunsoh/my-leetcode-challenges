// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/?envType=study-plan&id=algorithm-ii
// T.C.: O(N^2)
// S.C.: O(N)
public class Solution
{
  public int FindCircleNum(int[][] isConnected)
  {
    var provinces = 0;
    var visited = new HashSet<int>();
    for (var i = 0; i < isConnected.Length; i++)
    {
      provinces += Dfs(isConnected, visited, i); ;
    }
    return provinces;
  }

  int Dfs(int[][] isConnected, HashSet<int> visited, int city)
  {
    if (visited.Contains(city))
    {
      return 0;
    }

    visited.Add(city);
    for (var i = 0; i < isConnected.Length; i++)
    {
      if (isConnected[city][i] == 1)
      {
        Dfs(isConnected, visited, i);
      }
    }
    return 1;
  }
}

var isConnected = new int[][] {
  new int[] { 1, 1, 0 },
  new int[] { 1, 1, 0 },
  new int[] { 0, 0, 1 },
};
var expected = 2;
var result = new Solution().FindCircleNum(isConnected);
Console.WriteLine($"{result}, {result == expected}");

isConnected = new int[][] {
  new int[] { 1, 0, 0 },
  new int[] { 0, 1, 0 },
  new int[] { 0, 0, 1 },
};
expected = 3;
result = new Solution().FindCircleNum(isConnected);
Console.WriteLine($"{result}, {result == expected}");

isConnected = new int[][] {
  new int[] { 1, 0, 0, 1 },
  new int[] { 0, 1, 1, 0 },
  new int[] { 0, 1, 1, 1 },
  new int[] { 1, 0, 1, 1 },
};
expected = 1;
result = new Solution().FindCircleNum(isConnected);
Console.WriteLine($"{result}, {result == expected}");
