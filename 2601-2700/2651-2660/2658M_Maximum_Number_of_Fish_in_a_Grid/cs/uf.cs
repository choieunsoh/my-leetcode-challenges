// 2658. Maximum Number of Fish in a Grid
// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
public class Solution
{
  public int FindMaxFish(int[][] grid)
  {
    var maxFish = 0;
    var rows = grid.Length;
    var cols = grid[0].Length;
    var uf = new UnionFind(rows * cols);

    for (var row = 0; row < rows; row++)
    {
      for (var col = 0; col < cols; col++)
      {
        if (grid[row][col] > 0)
        {
          var index = row * cols + col;
          uf.Add(index, grid[row][col]);
        }
      }
    }

    var dirs = new int[] { 0, 1, 0, -1, 0 };
    for (var row = 0; row < rows; row++)
    {
      for (var col = 0; col < cols; col++)
      {
        if (grid[row][col] > 0)
        {
          for (var d = 0; d < 4; d++)
          {
            var newRow = row + dirs[d];
            var newCol = col + dirs[d + 1];
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] > 0)
            {
              var index = row * cols + col;
              var newIndex = newRow * cols + newCol;
              uf.Union(index, newIndex);
            }
          }
        }
      }
    }

    return uf.GetMax();
  }
}

public class UnionFind
{
  private int[] parent;
  private int[] rank;

  public UnionFind(int n)
  {
    parent = new int[n];
    rank = new int[n];
  }

  public void Add(int x, int value)
  {
    parent[x] = x;
    rank[x] = value;
  }

  public int GetMax() => rank.Max();

  public int Find(int x)
  {
    if (parent[x] != x)
    {
      parent[x] = Find(parent[x]);
    }
    return parent[x];
  }

  public void Union(int x, int y)
  {
    var rootX = Find(x);
    var rootY = Find(y);
    if (rootX == rootY) return;

    if (rank[rootX] >= rank[rootY])
    {
      parent[rootY] = rootX;
      rank[rootX] += rank[rootY];
    }
    else
    {
      parent[rootX] = rootY;
      rank[rootY] += rank[rootX];
    }
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
