// 2095. Delete the Middle Node of a Linked List
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
// T.C.: O(n)
// S.C.: O(1)
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
  public ListNode DeleteMiddle(ListNode head)
  {
    if (head.next == null) return null;

    var slow = head;
    var fast = head.next.next;
    while (fast != null && fast.next != null)
    {
      slow = slow.next;
      fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
  }
}

public class ListNode
{
  public int val;
  public ListNode next;
  public ListNode(int val = 0, ListNode next = null)
  {
    this.val = val;
    this.next = next;
  }

  public int[] ToArray()
  {
    var result = new List<int>();
    var head = this;
    while (head != null)
    {
      result.Add(head.val);
      head = head.next;
    }
    return result.ToArray();
  }
}

private ListNode CreateList(int[] nums)
{
  if (nums.Length == 0) return null;

  var head = new ListNode(nums[0]);
  var current = head;
  for (var i = 1; i < nums.Length; i++)
  {
    current.next = new ListNode(nums[i]);
    current = current.next;
  }
  return head;
}


var head = CreateList(new int[] { 1, 3, 4, 7, 1, 2, 6 });
var expected = CreateList(new int[] { 1, 3, 4, 1, 2, 6 });
var result = new Solution().DeleteMiddle(head);
Console.WriteLine($"{string.Join(",", result.ToArray())}, {result.ToArray().SequenceEqual(expected.ToArray())}");

head = CreateList(new int[] { 1, 2, 3, 4 });
expected = CreateList(new int[] { 1, 2, 4 });
result = new Solution().DeleteMiddle(head);
Console.WriteLine($"{string.Join(",", result.ToArray())}, {result.ToArray().SequenceEqual(expected.ToArray())}");

head = CreateList(new int[] { 2, 1 });
expected = CreateList(new int[] { 2 });
result = new Solution().DeleteMiddle(head);
Console.WriteLine($"{string.Join(",", result.ToArray())}, {result.ToArray().SequenceEqual(expected.ToArray())}");

head = CreateList(new int[] { 1 });
expected = CreateList(new int[0]);
result = new Solution().DeleteMiddle(head);
Console.WriteLine($"{result}, {result == null}");
