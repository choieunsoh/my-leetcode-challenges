// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/
// T.C.: O(n+m)
// S.C.: O(1)
public class Solution
{
  public string MergeAlternately(string word1, string word2)
  {
    var result = new StringBuilder();
    var maxLength = Math.Max(word1.Length, word2.Length);
    for (var i = 0; i < maxLength; i++)
    {
      if (i < word1.Length) result.Append(word1[i]);
      if (i < word2.Length) result.Append(word2[i]);
    }

    return result.ToString();
  }
}

var word1 = "abc";
var word2 = "pqr";
var expected = "apbqcr";
var result = new Solution().MergeAlternately(word1, word2);
Console.WriteLine("{0} {1}", result, result == expected);

word1 = "ab";
word2 = "pqrs";
expected = "apbqrs";
result = new Solution().MergeAlternately(word1, word2);
Console.WriteLine("{0} {1}", result, result == expected);

word1 = "abcd";
word2 = "pq";
expected = "apbqcd";
result = new Solution().MergeAlternately(word1, word2);
Console.WriteLine("{0} {1}", result, result == expected);
