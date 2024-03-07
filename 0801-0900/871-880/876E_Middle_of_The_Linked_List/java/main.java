// 876. Middle of The Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/
// T.C.: O(n)
// S.C.: O(1)

// java main.java
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();

    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    ListNode expected = head.next.next;
    ListNode result = solution.middleNode(head);
    System.out.println(result + " " + (expected == result ? "true" : "false"));

    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    expected = head.next.next.next;
    result = solution.middleNode(head);
    System.out.println(result + " " + (expected == result ? "true" : "false"));
  }
}

class Solution {
  public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    while (slow != null && fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
    next = null;
  }
}