// 2807. Insert Greatest Common Divisors in Linked List
// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
// T.C.: O(n)
// S.C.: O(1)
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
data class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

class Solution {
    fun insertGreatestCommonDivisors(head: ListNode?): ListNode? {
        var temp = ListNode(0);
        temp.next = head;
        var curr = head;
        while (curr != null && curr.next != null) {
            val a = curr.`val`;
            val c = curr.next!!.`val`;
            val b = gcd(a, c);

            var middle = ListNode(b);
            middle.next = curr.next;
            curr.next = middle;
            curr = middle.next;
        }
        return temp.next;
    }

    fun gcd(a: Int, b: Int): Int {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
}

fun main() {
  // 18, 6, 10, 3]
  var head = ListNode(18);
  var node1 = ListNode(6);
  var node2 = ListNode(10);
  var node3 = ListNode(3);
  head.next = node1;
  node1.next = node2;
  node2.next = node3;

  // 18, 6, 6, 2, 10, 1, 3]
  var expected = ListNode(18);
  var node4 = ListNode(6);
  var node5 = ListNode(6);
  var node6 = ListNode(2);
  var node7 = ListNode(10);
  var node8 = ListNode(1);
  var node9 = ListNode(3);
  expected.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;

  var result = Solution().insertGreatestCommonDivisors(head);
  println("${result} -> ${result == expected}");

  head = ListNode(7);
  expected = ListNode(7);
  result = Solution().insertGreatestCommonDivisors(head);
  println("${result} -> ${result == expected}");
}