// 399. Evaluate Division
// https://leetcode.com/problems/evaluate-division/
// T.C.: O(n+m)
// S.C.: O(n)
public class Solution
{
  public double[] CalcEquation(IList<IList<string>> equations, double[] values, IList<IList<string>> queries)
  {
    Dictionary<string, List<(string, double)>> graph = new();

    for (var i = 0; i < equations.Count; i++)
    {
      var a = equations[i][0];
      var b = equations[i][1];
      if (!graph.ContainsKey(a)) graph[a] = new List<(string, double)>();
      if (!graph.ContainsKey(b)) graph[b] = new List<(string, double)>();

      graph[a].Add((b, values[i]));
      graph[b].Add((a, 1 / values[i]));
    }

    double Dfs(string a, string b, HashSet<string> visited, double current)
    {
      if (!graph.ContainsKey(a) || !graph.ContainsKey(b)) return -1.0;
      if (a == b) return current;
      if (!visited.Add(a)) return -1.0;

      foreach (var (next, value) in graph[a])
      {
        var result = Dfs(next, b, visited, current * value);
        if (result != -1.0) return result;
      }
      return -1.0;
    }

    var results = new double[queries.Count];
    for (var i = 0; i < queries.Count; i++)
    {
      results[i] = Dfs(queries[i][0], queries[i][1], new HashSet<string>(), 1.0);
    }
    return results;
  }
}

var equations = new List<IList<string>> {
  new List<string> { "a", "b" },
  new List<string> { "b", "c" },
};
var values = new double[] { 2.0, 3.0 };
var queries = new List<IList<string>> {
  new List<string> { "a", "c" },
  new List<string> { "b", "a" },
  new List<string> { "a", "e" },
  new List<string> { "a", "a" },
  new List<string> { "x", "x" },
};
var expected = new double[] { 6.0, 0.5, -1.0, 1.0, -1.0 };
var result = new Solution().CalcEquation(equations, values, queries);
Console.WriteLine($"{result}, {result.SequenceEqual(expected)}");

equations = new List<IList<string>> {
  new List<string> { "a", "b" },
  new List<string> { "b", "c" },
  new List<string> { "bc", "cd" },
};
values = new double[] { 1.5, 2.5, 5.0 };
queries = new List<IList<string>> {
  new List<string> { "a", "c" },
  new List<string> { "c", "b" },
  new List<string> { "bc", "cd" },
  new List<string> { "cd", "bc" },
};
expected = new double[] { 3.75, 0.4, 5.0, 0.2 };
result = new Solution().CalcEquation(equations, values, queries);
Console.WriteLine($"{result}, {result.SequenceEqual(expected)}");

equations = new List<IList<string>> {
  new List<string> { "a", "b" },
};
values = new double[] { 0.5 };
queries = new List<IList<string>> {
  new List<string> { "a", "b" },
  new List<string> { "b", "a" },
  new List<string> { "a", "c" },
  new List<string> { "x", "y" },
};
expected = new double[] { 0.5, 2.0, -1.0, -1.0 };
result = new Solution().CalcEquation(equations, values, queries);
Console.WriteLine($"{result}, {result.SequenceEqual(expected)}");
