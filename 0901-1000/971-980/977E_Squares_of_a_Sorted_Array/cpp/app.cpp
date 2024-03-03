// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/
// T.C.: O(n)
// S.C.: O(n)
#include <iostream>
#include <vector>
#include <iterator>
using namespace std;

class Solution
{
public:
  vector<int> sortedSquares(vector<int> &nums)
  {
    int n = nums.size();
    int left = 0;
    int right = n - 1;
    vector<int> result(n);
    for (int i = n - 1; i >= 0; i--)
    {
      if (abs(nums[left]) >= abs(nums[right]))
      {
        result[i] = nums[left] * nums[left];
        left++;
      }
      else
      {
        result[i] = nums[right] * nums[right];
        right--;
      }
    }
    return result;
  }
};

string equalArray(vector<int> vector1, vector<int> vector2)
{
  if (equal(vector1.begin(), vector1.end(), vector2.begin()))
    return "true";

  return "false";
}

void test(vector<int> result, vector<int> expected)
{
  for (vector<int>::const_iterator num = result.begin(); num != result.end(); ++num)
  {
    cout << *num << " ";
  }
  cout << equalArray(result, expected) << endl;
}

// g++ app.cpp -o ./output/app.exe && ./output/app
int main()
{
  vector<int> nums = {-4, -1, 0, 3, 10};
  vector<int> expected = {0, 1, 9, 16, 100};
  vector<int> result = Solution().sortedSquares(nums);
  test(result, expected);

  nums = {-7, -3, 2, 3, 11};
  expected = {4, 9, 9, 49, 121};
  result = Solution().sortedSquares(nums);
  test(result, expected);

  return 0;
}