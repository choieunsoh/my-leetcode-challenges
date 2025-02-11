// 1466. Reorder Routes to Make All Paths Lead to the City Zero
// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public int MinReorder(int n, int[][] connections)
  {
    var changes = 0;
    var roads = new List<int>[n];
    for (var i = 0; i < n; i++)
    {
      roads[i] = new List<int>();
    }

    foreach (var connection in connections)
    {
      var a = connection[0];
      var b = connection[1];
      roads[a].Add(b);
      roads[b].Add(-a);
    }

    var visited = new bool[n];
    var queue = new Queue<int>();
    queue.Enqueue(0);
    visited[0] = true;

    while (queue.Count > 0)
    {
      var city = queue.Dequeue();
      foreach (var nextCity in roads[city])
      {
        if (visited[Math.Abs(nextCity)]) continue;

        if (nextCity > 0) changes++;
        visited[Math.Abs(nextCity)] = true;
        queue.Enqueue(Math.Abs(nextCity));
      }
    }

    return changes;
  }
}

var n = 6;
var connections = new int[][] {
  new int[] { 0, 1 },
  new int[] { 1, 3 },
  new int[] { 2, 3 },
  new int[] { 4, 0 },
  new int[] { 4, 5 },
 };
var expected = 3;
var result = new Solution().MinReorder(n, connections);
Console.WriteLine($"{result}, {result == expected}");

n = 5;
connections = new int[][] {
  new int[] { 1, 0 },
  new int[] { 1, 2 },
  new int[] { 3, 2 },
  new int[] { 3, 4 },
};
expected = 2;
result = new Solution().MinReorder(n, connections);
Console.WriteLine($"{result}, {result == expected}");

n = 3;
connections = new int[][] {
  new int[] { 1, 0 },
  new int[] { 2, 0 },
};
expected = 0;
result = new Solution().MinReorder(n, connections);
Console.WriteLine($"{result}, {result == expected}");
