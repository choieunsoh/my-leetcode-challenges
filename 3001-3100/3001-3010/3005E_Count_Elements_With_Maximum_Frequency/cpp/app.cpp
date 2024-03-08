// 3005. Count Elements With Maximum Frequency
// https://leetcode.com/problems/count-elements-with-maximum-frequency/
// T.C.: O(n)
// S.C.: O(n)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
using namespace std;

class Solution
{
public:
  int maxFrequencyElements(vector<int> &nums)
  {
    int result = 0;
    int freq[101] = {0};
    int maxFreq = 0;
    for (int i = 0; i < nums.size(); i++)
    {
      freq[nums[i]]++;
      if (freq[nums[i]] > maxFreq)
      {
        maxFreq = freq[nums[i]];
        result = maxFreq;
      }
      else if (freq[nums[i]] == maxFreq)
      {
        result += maxFreq;
      }
    }
    return result;
  }
};

// g++ app.cpp -o ./app.exe && ./app
int main()
{
  vector<int> nums = {1, 2, 2, 3, 1, 4};
  int expected = 4;
  int result = Solution().maxFrequencyElements(nums);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 2, 3, 4, 5};
  expected = 5;
  result = Solution().maxFrequencyElements(nums);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {15};
  expected = 1;
  result = Solution().maxFrequencyElements(nums);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}