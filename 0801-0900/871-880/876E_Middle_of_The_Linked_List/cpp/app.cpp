// 876. Middle of The Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
// T.C.: O(n)
// S.C.: O(1)
#include <iostream>
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
};

class Solution
{
public:
  ListNode *middleNode(ListNode *head)
  {
    ListNode *slow = head;
    ListNode *fast = head;
    while (slow != NULL && fast != NULL && fast->next != NULL)
    {
      slow = slow->next;
      fast = fast->next->next;
    }
    return slow;
  }
};

// g++ app.cpp -o ./app.exe && ./app
int main()
{
  ListNode *head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);
  ListNode *expected = head->next->next;
  ListNode *result = Solution().middleNode(head);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  head = new ListNode(1);
  head->next = new ListNode(2);
  head->next->next = new ListNode(3);
  head->next->next->next = new ListNode(4);
  head->next->next->next->next = new ListNode(5);
  head->next->next->next->next->next = new ListNode(6);
  expected = head->next->next->next;
  result = Solution().middleNode(head);
  cout << result << " " << (expected == result ? "true" : "false") << endl;

  return 0;
}