// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/
// T.C.: O(n)
// S.C.: O(n)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
#include <unordered_map>
using namespace std;

class Solution
{
public:
  int findMaxLength(vector<int> &nums)
  {
    int maxLength = 0;
    int count = 0;
    unordered_map<int, int> map;
    map[0] = -1;
    for (int index = 0; index < nums.size(); ++index)
    {
      count += nums[index] ? 1 : -1;
      if (map.find(count) != map.end())
      {
        maxLength = max(maxLength, index - map[count]);
      }
      else
      {
        map[count] = index;
      }
    }
    return maxLength;
  }
};

// g++ ./cpp/app.cpp -o ./cpp/app.exe && ./cpp/app
int main()
{
  vector<int> nums = {0, 1};
  int expected = 2;
  int result = Solution().findMaxLength(nums);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {0, 1, 0};
  expected = 2;
  result = Solution().findMaxLength(nums);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  nums = {1, 1, 0, 0, 1, 1, 0, 1, 1};
  expected = 6;
  result = Solution().findMaxLength(nums);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}