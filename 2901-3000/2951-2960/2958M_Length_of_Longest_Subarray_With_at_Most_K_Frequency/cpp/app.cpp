// 2958. Length of Longest Subarray With at Most K Frequency
// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
// T.C.: O(n)
// S.C.: O(n)
#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;

class Solution
{
public:
  int maxSubarrayLength(vector<int> &nums, int k)
  {
    int ans = 0, start = 0;
    unordered_map<int, int> frequency;

    for (int end = 0; end < nums.size(); end++)
    {
      frequency[nums[end]]++;
      while (frequency[nums[end]] > k)
      {
        frequency[nums[start]]--;
        start++;
      }
      ans = max(ans, end - start + 1);
    }

    return ans;
  }
};

// g++ -std=c++2a ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<int> nums = {1, 2, 3, 1, 2, 3, 1, 2};
  int k = 2;
  int expected = 6;
  int result = Solution().maxSubarrayLength(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 2, 1, 2, 1, 2, 1, 2};
  k = 1;
  expected = 2;
  result = Solution().maxSubarrayLength(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {5, 5, 5, 5, 5, 5, 5};
  k = 4;
  expected = 4;
  result = Solution().maxSubarrayLength(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}