// 1462. Course Schedule IV
// https://leetcode.com/problems/course-schedule-iv/description/
// T.C.: O(n^2*m)
// S.C.: O(n^2)
public class Solution
{
  public bool[] CheckIfPrerequisite(int numCourses, int[][] prerequisites, int[][] queries)
  {
    var graph = new List<int>[numCourses];
    for (var i = 0; i < numCourses; i++)
    {
      graph[i] = new List<int>();
    }

    foreach (var prerequisite in prerequisites)
    {
      var course = prerequisite[0];
      var nextCourse = prerequisite[1];
      graph[course].Add(nextCourse);
    }

    var isPrerequisite = new bool[numCourses, numCourses];
    Preprocess(graph, numCourses, isPrerequisite);

    var result = new bool[queries.Length];
    for (var i = 0; i < queries.Length; i++)
    {
      var a = queries[i][0];
      int b = queries[i][1];
      result[i] = isPrerequisite[a, b];
    }

    return result;
  }

  private void Preprocess(List<int>[] graph, int numCourses, bool[,] isPrerequisite)
  {
    for (var course = 0; course < numCourses; course++)
    {
      var queue = new Queue<int>();
      queue.Enqueue(course);
      while (queue.Count > 0)
      {
        var currentCourse = queue.Dequeue();
        foreach (var nextCourse in graph[currentCourse])
        {
          if (isPrerequisite[currentCourse, nextCourse]) continue;
          isPrerequisite[course, nextCourse] = true;
          queue.Enqueue(nextCourse);
        }
      }
    }
  }
}

var numCourses = 2;
var prerequisites = new int[][] { new int[] { 1, 0 } };
var queries = new int[][] { new int[] { 0, 1 }, new int[] { 1, 0 } };
var expected = new bool[] { false, true };
var result = new Solution().CheckIfPrerequisite(numCourses, prerequisites, queries);
Console.WriteLine($"[{string.Join(", ", result)}], {result.SequenceEqual(expected)}");

numCourses = 2;
prerequisites = new int[][] { };
queries = new int[][] { new int[] { 1, 0 }, new int[] { 0, 1 } };
expected = new bool[] { false, false };
result = new Solution().CheckIfPrerequisite(numCourses, prerequisites, queries);
Console.WriteLine($"[{string.Join(", ", result)}], {result.SequenceEqual(expected)}");

numCourses = 3;
prerequisites = new int[][] { new int[] { 1, 2 }, new int[] { 1, 0 }, new int[] { 2, 0 } };
queries = new int[][] { new int[] { 1, 0 }, new int[] { 1, 2 } };
expected = new bool[] { true, true };
result = new Solution().CheckIfPrerequisite(numCourses, prerequisites, queries);
Console.WriteLine($"[{string.Join(", ", result)}], {result.SequenceEqual(expected)}");
