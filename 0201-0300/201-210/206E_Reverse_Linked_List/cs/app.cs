// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// T.C.: O(n)
// S.C: O(1)
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
  public ListNode ReverseList(ListNode head)
  {
    ListNode prev = null;
    var curr = head;
    while (curr != null)
    {
      var next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
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

  public static ListNode Create(int[] nums)
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

  public bool Equals(ListNode other)
  {
    var head = this;
    while (head != null)
    {
      if (head.val != other.val) return false;
      head = head.next;
      other = other.next;
    }
    return true;
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

  override public string ToString()
  {
    return string.Join(", ", ToArray());
  }
}

var head = ListNode.Create(new int[] { 1, 2, 3, 4, 5 });
var expected = ListNode.Create(new int[] { 5, 4, 3, 2, 1 });
var result = new Solution().ReverseList(head);
Console.WriteLine($"{result}, {result.Equals(expected)}");

head = ListNode.Create(new int[] { 1, 2 });
expected = ListNode.Create(new int[] { 2, 1 });
result = new Solution().ReverseList(head);
Console.WriteLine($"{result}, {result.Equals(expected)}");

head = ListNode.Create(new int[0]);
expected = ListNode.Create(new int[0]);
result = new Solution().ReverseList(head);
Console.WriteLine($"{result}, {result == null}");

head = ListNode.Create(new int[] { 2 });
expected = ListNode.Create(new int[] { 2 });
result = new Solution().ReverseList(head);
Console.WriteLine($"{result}, {result.Equals(expected)}");
