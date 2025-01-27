// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public bool UniqueOccurrences(int[] arr)
  {
    var freq = new Dictionary<int, int>();
    foreach (var num in arr)
    {
      if (!freq.ContainsKey(num))
      {
        freq[num] = 0;
      }
      freq[num]++;
    }

    var uniqueFreq = new HashSet<int>(freq.Values);
    return uniqueFreq.Count == freq.Count;
  }
}

var arr = new int[] { 1, 2, 2, 1, 1, 3 };
var expected = true;
var result = new Solution().UniqueOccurrences(arr);
Console.WriteLine($"{result}, {result == expected}");

arr = new int[] { 1, 2 };
expected = false;
result = new Solution().UniqueOccurrences(arr);
Console.WriteLine($"{result}, {result == expected}");

arr = new int[] { -3, 0, 1, -3, 1, 1, 1, -3, 10, 0 };
expected = true;
result = new Solution().UniqueOccurrences(arr);
Console.WriteLine($"{result}, {result == expected}");
