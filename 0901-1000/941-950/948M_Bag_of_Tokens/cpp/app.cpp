// 948. Bag of Tokens
// https://leetcode.com/problems/bag-of-tokens/description/
// T.C.: O(n log n)
// S.C.: O(1)
#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator>
using namespace std;

class Solution
{
public:
  int bagOfTokensScore(vector<int> &tokens, int power)
  {
    if (tokens.size() == 0)
    {
      return 0;
    }
    int left = 0;
    int right = tokens.size() - 1;
    int maxScore = 0;
    int score = 0;
    int currentPower = power;
    sort(tokens.begin(), tokens.end());
    while (left <= right)
    {
      if (currentPower >= tokens[left])
      {
        currentPower -= tokens[left++];
        score++;
        maxScore = max(maxScore, score);
      }
      else if (score > 0)
      {
        currentPower += tokens[right--];
        score--;
      }
      else
      {
        break;
      }
    }

    return maxScore;
  }
};

// g++ app.cpp -o ./app.exe && ./app
int main()
{
  vector<int> tokens = {100};
  int expected = 0;
  int result = Solution().bagOfTokensScore(tokens, 50);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  tokens = {200, 100};
  expected = 1;
  result = Solution().bagOfTokensScore(tokens, 150);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  tokens = {100, 200, 300, 400, 500};
  expected = 2;
  result = Solution().bagOfTokensScore(tokens, 200);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  tokens = {33, 4, 28, 24, 96};
  expected = 3;
  result = Solution().bagOfTokensScore(tokens, 35);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  tokens = {};
  expected = 0;
  result = Solution().bagOfTokensScore(tokens, 50);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}