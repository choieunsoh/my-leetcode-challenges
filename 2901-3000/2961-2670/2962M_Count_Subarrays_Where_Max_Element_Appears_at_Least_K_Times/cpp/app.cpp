// 2962. Count Subarrays Where Max Element Appears at Least K Times
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
  long long countSubarrays(vector<int> &nums, int k)
  {
    int maxElement = *max_element(nums.begin(), nums.end());
    long long result = 0, left = 0;

    for (int right = 0; right < nums.size(); right++)
    {
      if (nums[right] == maxElement)
      {
        k--;
      }
      while (!k)
      {
        if (nums[left] == maxElement)
        {
          k++;
        }
        left++;
      }
      result += left;
    }
    return result;
  }
};

// g++ -std=c++2a ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<int> nums = {1, 3, 2, 3, 3};
  int k = 2;
  int expected = 6;
  int result = Solution().countSubarrays(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 4, 2, 1};
  k = 3;
  expected = 0;
  result = Solution().countSubarrays(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {2, 2, 2, 2, 1, 3, 3, 2, 2, 1, 1, 3, 1, 1, 2, 3, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 3};
  k = 5;
  expected = 31;
  result = Solution().countSubarrays(nums, k);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}