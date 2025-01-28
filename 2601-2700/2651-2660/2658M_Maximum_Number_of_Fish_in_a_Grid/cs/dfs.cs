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
          maxFish = Math.Max(maxFish, Dfs(grid, row, col));
        }
      }
    }
    return maxFish;
  }

  private int Dfs(int[][] grid, int row, int col)
  {
    if (row < 0 || row >= grid.Length || col < 0 || col >= grid[0].Length || grid[row][col] == 0)
    {
      return 0;
    }

    var fish = grid[row][col];
    grid[row][col] = 0;

    fish += Dfs(grid, row - 1, col);
    fish += Dfs(grid, row + 1, col);
    fish += Dfs(grid, row, col - 1);
    fish += Dfs(grid, row, col + 1);

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
