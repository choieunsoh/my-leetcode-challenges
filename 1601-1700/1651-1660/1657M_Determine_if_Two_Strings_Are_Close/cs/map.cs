// 1657. Determine if Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/description/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public bool CloseStrings(string word1, string word2)
  {
    var word1Count = new Dictionary<char, int>();
    var word2Count = new Dictionary<char, int>();
    foreach (var c in word1)
    {
      if (word1Count.ContainsKey(c)) word1Count[c]++;
      else word1Count[c] = 1;
    }
    foreach (var c in word2)
    {
      if (word2Count.ContainsKey(c)) word2Count[c]++;
      else word2Count[c] = 1;
    }

    if (word1Count.Count != word2Count.Count) return false;

    var word1Freq = word1Count.Values.ToArray();
    var word2Freq = word2Count.Values.ToArray();
    Array.Sort(word1Freq);
    Array.Sort(word2Freq);
    return word1Freq.SequenceEqual(word2Freq);
  }
}

var word1 = "abc";
var word2 = "bca";
var expected = true;
var result = new Solution().CloseStrings(word1, word2);
Console.WriteLine($"{result}, {result == expected}");

word1 = "a";
word2 = "aa";
expected = false;
result = new Solution().CloseStrings(word1, word2);
Console.WriteLine($"{result}, {result == expected}");

word1 = "cabbba";
word2 = "abbccc";
expected = true;
result = new Solution().CloseStrings(word1, word2);
Console.WriteLine($"{result}, {result == expected}");
