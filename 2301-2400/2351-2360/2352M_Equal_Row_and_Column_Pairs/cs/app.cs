// 2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/
// T.C.: O(n^2)
// S.C.: O(n^2)
public class Solution
{
  public int EqualPairs(int[][] grid)
  {
    var rowValues = new Dictionary<string, int>();
    for (var i = 0; i < grid.Length; i++)
    {
      var row = grid[i];
      var key = string.Join(",", row);
      if (rowValues.ContainsKey(key))
      {
        rowValues[key]++;
      }
      else
      {
        rowValues.Add(key, 1);
      }
    }

    var result = 0;
    for (var j = 0; j < grid.Length; j++)
    {
      var column = new List<int>();
      for (var i = 0; i < grid.Length; i++)
      {
        column.Add(grid[i][j]);
      }
      var key = string.Join(",", column);
      if (rowValues.ContainsKey(key))
      {
        result += rowValues[key];
      }
    }

    return result;
  }
}

var grid = new int[][]
{
  new int[] { 3, 2, 1 },
  new int[] { 1, 7, 6 },
  new int[] { 2, 7, 7 }
};
var expected = 1;
var result = new Solution().EqualPairs(grid);
Console.WriteLine($"{result}, {result == expected}");

grid = new int[][]
{
  new int[] { 3, 1, 2, 2 },
  new int[] { 1, 4, 4, 5 },
  new int[] { 2, 4, 2, 2 },
  new int[] { 2, 4, 2, 2 }
};
expected = 3;
result = new Solution().EqualPairs(grid);
Console.WriteLine($"{result}, {result == expected}");

grid = new int[][]
{
  new int[] { 1, 1, 2, 2 },
  new int[] { 1, 1, 2, 2 },
  new int[] { 2, 2, 1, 2 },
  new int[] { 2, 2, 2, 1 }
};
expected = 6;
result = new Solution().EqualPairs(grid);
Console.WriteLine($"{result}, {result == expected}");
