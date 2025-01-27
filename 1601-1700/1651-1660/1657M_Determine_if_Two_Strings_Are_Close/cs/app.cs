// 1657. Determine if Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/description/
// T.C.: O(n)
// S.C.: O(1)
public class Solution
{
  public bool CloseStrings(string word1, string word2)
  {
    var word1Count = new int[26];
    var word2Count = new int[26];
    foreach (var c in word1) word1Count[c - 'a']++;
    foreach (var c in word2) word2Count[c - 'a']++;

    for (var i = 0; i < 26; i++)
    {
      if (word1Count[i] == 0 && word2Count[i] == 0) continue;
      if (word1Count[i] == 0 || word2Count[i] == 0) return false;
    }

    Array.Sort(word1Count);
    Array.Sort(word2Count);
    return word1Count.SequenceEqual(word2Count);
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
