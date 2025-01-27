// 2215. Find the Difference of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/
// T.C.: O(m+n)
// S.C.: O(m+n)
public class Solution
{
  public IList<IList<int>> FindDifference(int[] nums1, int[] nums2)
  {
    var result = new List<IList<int>>();
    result.Add(new List<int>());
    result.Add(new List<int>());

    var set1 = new HashSet<int>(nums1);
    var set2 = new HashSet<int>(nums2);

    foreach (var num in set1)
    {
      if (!set2.Contains(num))
      {
        result[0].Add(num);
      }
    }

    foreach (var num in set2)
    {
      if (!set1.Contains(num))
      {
        result[1].Add(num);
      }
    }

    return result;
  }
}

private static void PrintResult(IList<IList<int>> result, IList<IList<int>> expected)
{
  Console.WriteLine("Result: " + FormatNestedList(result));
  Console.WriteLine("Expected: " + FormatNestedList(expected));
  Console.WriteLine("Match: " + result.SequenceEqual(expected, new ListComparer()));
}

private static string FormatNestedList(IList<IList<int>> list)
{
  return "[" + string.Join(", ", list.Select(innerList => "[" + string.Join(", ", innerList) + "]")) + "]";
}

private class ListComparer : IEqualityComparer<IList<int>>
{
  public bool Equals(IList<int> x, IList<int> y)
  {
    return x.SequenceEqual(y);
  }

  public int GetHashCode(IList<int> obj)
  {
    return obj.Aggregate(0, (hash, item) => hash ^ item.GetHashCode());
  }
}

var nums1 = new int[] { 1, 2, 3 };
var nums2 = new int[] { 2, 4, 6 };
var expected = new List<IList<int>> {
  new List<int> { 1, 3 },
  new List<int> { 4, 6 },
};
var result = new Solution().FindDifference(nums1, nums2);
PrintResult(result, expected);

nums1 = new int[] { 1, 2, 3, 3 };
nums2 = new int[] { 1, 1, 2, 2 };
expected = new List<IList<int>> {
  new List<int> { 3 },
  new List<int>(),
};
result = new Solution().FindDifference(nums1, nums2);
PrintResult(result, expected);
