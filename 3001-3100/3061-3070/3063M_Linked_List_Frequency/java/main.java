// 3063. Linked List Frequency
// https://leetcode.com/problems/linked-list-frequency/
// T.C.: O(n)
// S.C.: O(n)

// java main.java

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class Main {

  public static void main(String[] args) {
    Solution solution = new Solution();

    // [1, 1, 2, 1, 2, 3]
    ListNode head = new ListNode(1);
    head.next = new ListNode(1);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(1);
    head.next.next.next.next = new ListNode(2);
    head.next.next.next.next.next = new ListNode(3);
    ArrayList<Integer> expected = new ArrayList<>();
    expected.add(3);
    expected.add(2);
    expected.add(1);
    ArrayList<Integer> result = solution.toArray(solution.frequenciesOfElements(head));
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));

    head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(6);
    expected = new ArrayList<>();
    expected.add(1);
    expected.add(1);
    expected.add(1);
    expected.add(1);
    expected.add(1);
    expected.add(1);
    result = solution.toArray(solution.frequenciesOfElements(head));
    System.out.println(result + " " + (expected.equals(result) ? "true" : "false"));
  }
}

class Solution {

  public ListNode frequenciesOfElements(ListNode head) {
    if (head == null) return null;
    Map<Integer, ListNode> map = new HashMap<>();
    ListNode newHead = new ListNode(-1);
    ListNode tail = newHead;
    while (head != null) {
      ListNode node = map.computeIfAbsent(head.val, h -> new ListNode(0));
      node.val++;
      if (node.val == 1) {
        tail.next = node;
        tail = node;
      }
      head = head.next;
    }
    return newHead.next;
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
