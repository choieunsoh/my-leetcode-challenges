// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
// T.C.: O(n)
// S.C.: O(n)

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    // [1, 2, -3, 3, 1];
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(-3);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(1);
    ArrayList<Integer> expected = new ArrayList<>();
    expected.add(3);
    expected.add(1);
    ArrayList<Integer> result = solution.toArray(solution.removeZeroSumSublists(head));
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));

    // [1, 2, 3, -3, 4];
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(-3);
    head.next.next.next.next = new ListNode(4);
    expected = new ArrayList<>();
    expected.add(1);
    expected.add(2);
    expected.add(4);
    result = solution.toArray(solution.removeZeroSumSublists(head));
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));

    // [1, 2, 3, -3, -2];
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(-3);
    head.next.next.next.next = new ListNode(-2);
    expected = new ArrayList<>();
    expected.add(1);
    result = solution.toArray(solution.removeZeroSumSublists(head));
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));

    // [1, 2, 3, -3, -2, -1, 5];
    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(-3);
    head.next.next.next.next = new ListNode(-2);
    head.next.next.next.next.next = new ListNode(-1);
    head.next.next.next.next.next.next = new ListNode(5);
    expected = new ArrayList<>();
    expected.add(5);
    result = solution.toArray(solution.removeZeroSumSublists(head));
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));
  }
}

class Solution {

  public ListNode removeZeroSumSublists(ListNode head) {
    Map<Integer, ListNode> map = new HashMap<>();
    ListNode dummy = new ListNode(0);
    dummy.next = head;

    int sum = 0;
    ListNode current = dummy;
    while (current != null) {
      sum += current.val;
      map.put(sum, current);
      current = current.next;
    }

    sum = 0;
    current = dummy;
    while (current != null) {
      sum += current.val;
      current.next = map.get(sum).next;
      current = current.next;
    }

    return dummy.next;
  }

  public ArrayList<Integer> toArray(ListNode list) {
    ArrayList<Integer> result = new ArrayList<>();
    while (list != null) {
      result.add(list.val);
      list = list.next;
    }
    return result;
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
