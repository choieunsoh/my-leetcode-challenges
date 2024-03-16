// 325. Maximum Size Subarray Sum Equals k
// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/description/
// T.C.: O(N)
// S.C.: O(N)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <unordered_map>
using namespace std;

class Solution
{
public:
  int maxSubArrayLen(vector<int> &nums, int k)
  {
    int maxLength = 0;
    long long int prefixSum = 0;
    unordered_map<long long int, int> prefixSumMap;
    for (int index = 0; index < nums.size(); index++)
    {
      prefixSum += nums[index];
      if (prefixSum == k)
      {
        maxLength = index + 1;
      }
      else if (prefixSumMap.find(prefixSum - k) != prefixSumMap.end())
      {
        maxLength = max(maxLength, index - prefixSumMap[prefixSum - k]);
      }
      if (prefixSumMap.find(prefixSum) == prefixSumMap.end())
      {
        prefixSumMap[prefixSum] = index;
      }
    }
    return maxLength;
  }
};

// g++ ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<int> nums = {1, -1, 5, -2, 3};
  int k = 3;
  int expected = 4;
  int result = Solution().maxSubArrayLen(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {-2, -1, 2, 1};
  k = 1;
  expected = 2;
  result = Solution().maxSubArrayLen(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 0, -1};
  k = -1;
  expected = 2;
  result = Solution().maxSubArrayLen(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}