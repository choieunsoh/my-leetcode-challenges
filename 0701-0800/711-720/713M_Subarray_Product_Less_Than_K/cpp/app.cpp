// 713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
  int numSubarrayProductLessThanK(vector<int> &nums, int k)
  {
    int result = 0;
    if (k <= 1)
    {
      return result;
    }

    int product = 1;
    int left = 0;
    for (int right = 0; right < nums.size(); right++)
    {
      product *= nums[right];
      while (product >= k && left < nums.size())
      {
        product /= nums[left];
        left++;
      }
      result += right - left + 1;
    }

    return result;
  }
};

// g++ -std=c++2a ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<int> nums = {10, 5, 2, 6};
  int k = 100;
  int expected = 8;
  int result = Solution().numSubarrayProductLessThanK(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 2, 3};
  k = 0;
  expected = 0;
  result = Solution().numSubarrayProductLessThanK(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 1, 1};
  k = 1;
  expected = 0;
  result = Solution().numSubarrayProductLessThanK(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}