// 3063. Linked List Frequency
// https://leetcode.com/problems/linked-list-frequency/
// T.C.: O(n)
// S.C.: O(n)
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
  ListNode *frequenciesOfElements(ListNode *head)
  {
    unordered_map<int, int> counts;
    while (head != nullptr)
    {
      counts[head->val]++;
      head = head->next;
    }
    for (auto &[_, freq] : counts)
    {
      head = new ListNode(freq, head);
    }
    return head;
  }

  vector<int> toVector(ListNode *head)
  {
    vector<int> result;
    ListNode *current = head;
    while (current != nullptr)
    {
      result.push_back(current->val);
      current = current->next;
    }
    return result;
  }

  void printVector(vector<int> &nums)
  {
    for (int i = 0; i < nums.size(); i++)
    {
      cout << nums[i] << " ";
    }
    cout << endl;
  }
};

// g++ -std=c++2a app.cpp -o ./app.exe && ./app
int main()
{
  ListNode *head = new ListNode(1);
  head->next = new ListNode(1);
  head->next->next = new ListNode(2);
  head->next->next->next = new ListNode(1);
  head->next->next->next->next = new ListNode(2);
  head->next->next->next->next->next = new ListNode(3);
  vector<int> expected = {3, 2, 1};
  ListNode *result = Solution().frequenciesOfElements(head);
  vector<int> resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);
  head->next->next->next->next->next = new ListNode(6);
  expected = {1, 1, 1, 1, 1, 1};
  result = Solution().frequenciesOfElements(head);
  resultVector = Solution().toVector(result);
  Solution().printVector(resultVector);
  cout << result << " " << (expected == resultVector ? "true" : "false") << endl;

  return 0;
}