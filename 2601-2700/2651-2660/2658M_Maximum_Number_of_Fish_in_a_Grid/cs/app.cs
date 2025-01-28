// 2658. Maximum Number of Fish in a Grid
// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
public class Solution
{
  public int FindMaxFish(int[][] grid)
  {
    var maxFish = 0;
    for (var row = 0; row < grid.Length; row++)
    {
      for (var col = 0; col < grid[0].Length; col++)
      {
        if (grid[row][col] > 0)
        {
          maxFish = Math.Max(maxFish, Bfs(grid, row, col));
        }
      }
    }
    return maxFish;
  }

  private int Bfs(int[][] grid, int row, int col)
  {
    var fish = 0;
    var queue = new Queue<(int row, int col)>();
    queue.Enqueue((row, col));

    while (queue.Count > 0)
    {
      var (r, c) = queue.Dequeue();

      if (grid[r][c] == 0) continue;
      fish += grid[r][c];
      grid[r][c] = 0;

      if (r - 1 >= 0) queue.Enqueue((r - 1, c));
      if (r + 1 < grid.Length) queue.Enqueue((r + 1, c));
      if (c - 1 >= 0) queue.Enqueue((r, c - 1));
      if (c + 1 < grid[0].Length) queue.Enqueue((r, c + 1));
    }

    return fish;
  }
}

var grid = new int[][] {
  new int[] { 0, 2, 1, 0 },
  new int[] { 4, 0, 0, 3 },
  new int[] { 1, 0, 0, 4 },
  new int[] { 0, 3, 2, 0 },
};
var expected = 7;
var result = new Solution().FindMaxFish(grid);
Console.WriteLine($"{result}, {result == expected}");

grid = new int[][] {
  new int[] { 1, 0, 0, 0 },
  new int[] { 0, 0, 0, 0 },
  new int[] { 0, 0, 0, 0 },
  new int[] { 0, 0, 0, 1 },
};
expected = 1;
result = new Solution().FindMaxFish(grid);
Console.WriteLine($"{result}, {result == expected}");

grid = new int[][] {
  new int[] { 8, 6 },
  new int[] { 2, 6 },
};
expected = 22;
result = new Solution().FindMaxFish(grid);
Console.WriteLine($"{result}, {result == expected}");

grid = new int[][] {
  new int[] { 0, 5 },
  new int[] { 8, 4 },
};
expected = 17;
result = new Solution().FindMaxFish(grid);
Console.WriteLine($"{result}, {result == expected}");
