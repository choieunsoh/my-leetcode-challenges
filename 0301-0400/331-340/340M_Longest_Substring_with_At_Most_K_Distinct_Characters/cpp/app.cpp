// 340. Longest Substring with At Most K Distinct Characters
// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
// T.C.: O(n)
// S.C.: O(k)
#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;

class Solution
{
public:
  int lengthOfLongestSubstringKDistinct(string s, int k)
  {
    unordered_map<char, int> freq;
    int left = 0, right = 0;

    int result = 0;
    while (right < s.size())
    {
      freq[s[right]]++;
      if (freq.size() <= k)
      {
        result = max(right - left + 1, result);
      }

      if (freq.size() > k)
      {
        auto it = freq.find(s[left]);
        if (--(it->second) <= 0)
        {
          freq.erase(it);
        }
        left++;
      }
      right++;
    }
    return result;
  }
};

// g++ -std=c++2a ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  string s = "eceba";
  int k = 2;
  int expected = 3;
  int result = Solution().lengthOfLongestSubstringKDistinct(s, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  s = "aa";
  k = 1;
  expected = 2;
  result = Solution().lengthOfLongestSubstringKDistinct(s, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  s = "abaccc";
  k = 2;
  expected = 4;
  result = Solution().lengthOfLongestSubstringKDistinct(s, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}