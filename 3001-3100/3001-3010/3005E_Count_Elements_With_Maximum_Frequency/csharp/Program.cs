// 3005. Count Elements With Maximum Frequency
// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// T.C.: O(n)
// S.C.: O(n)
public class Solution
{
  public int MaxFrequencyElements(int[] nums)
  {
    int result = 0;
    int maxFreq = 0;
    int[] freq = new int[101];
    foreach (int num in nums)
    {
      freq[num]++;
      if (freq[num] == maxFreq)
      {
        result += maxFreq;
      }
      else if (freq[num] > maxFreq)
      {
        maxFreq = freq[num];
        result = maxFreq;
      }
    }

    return result;
  }
}

namespace Application
{
  class Program
  {
    static void Main(string[] args)
    {
      Solution solution = new Solution();

      var edges1 = new int[] { 1, 2, 2, 3, 1, 4 };
      var expected1 = 4;
      var result1 = solution.MaxFrequencyElements(edges1);
      Console.WriteLine("{0} {1}", result1, result1 == expected1);

      var edges2 = new int[] { 1, 2, 3, 4, 5 };
      var expected2 = 5;
      var result2 = solution.MaxFrequencyElements(edges2);
      Console.WriteLine("{0} {1}", result2, result2 == expected2);

      var edges3 = new int[] { 15 };
      var expected3 = 1;
      var result3 = solution.MaxFrequencyElements(edges3);
      Console.WriteLine("{0} {1}", result3, result3 == expected3);
    }
  }
}
