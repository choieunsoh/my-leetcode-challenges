// 930. Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
using namespace std;

class Solution
{
public:
  int numSubarraysWithSum(vector<int> &nums, int goal)
  {
    int currentCount = 0;
    int left = 0;
    int right = 0;
    int leftSum = 0;
    int rightSum = 0;
    for (int end = 0; end < nums.size(); end++)
    {
      leftSum += nums[end];
      while (left < end && leftSum > goal)
      {
        leftSum -= nums[left++];
      }

      rightSum += nums[end];
      while (right < end && ((rightSum > goal) || (rightSum == goal && nums[right] == 0)))
      {
        rightSum -= nums[right++];
      }

      if (leftSum == goal)
      {
        currentCount += right - left + 1;
      }
    }
    return currentCount;
  }
};

// g++ ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<int> nums = {1, 0, 1, 0, 1};
  int expected = 4;
  int result = Solution().numSubarraysWithSum(nums, 2);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {0, 0, 0, 0, 0};
  expected = 15;
  result = Solution().numSubarraysWithSum(nums, 0);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 0, 0, 1, 0, 1};
  expected = 5;
  result = Solution().numSubarraysWithSum(nums, 2);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}