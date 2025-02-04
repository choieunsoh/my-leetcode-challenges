// 1448. Count Good Nodes in Binary Tree
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// T.C.: O(n)
// S.C.: O(log n)
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class TreeNode
{
  public int val;
  public TreeNode left;
  public TreeNode right;
  public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
  {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

public class Solution
{
  public int GoodNodes(TreeNode root)
  {
    var queue = new Queue<Tuple<TreeNode, int>>();
    queue.Enqueue(new Tuple<TreeNode, int>(root, root.val));

    var count = 0;
    while (queue.Count > 0)
    {
      var (node, maxSoFar) = queue.Dequeue();
      if (node.val >= maxSoFar)
      {
        maxSoFar = node.val;
        count++;
      }

      if (node.left != null)
      {
        queue.Enqueue(new Tuple<TreeNode, int>(node.left, maxSoFar));
      }

      if (node.right != null)
      {
        queue.Enqueue(new Tuple<TreeNode, int>(node.right, maxSoFar));
      }
    }

    return count;
  }
}

// [3, 1, 4, 3, null, 1, 5];
var root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);
var expected = 4;
var result = new Solution().GoodNodes(root);
Console.WriteLine($"{result}, {result == expected}");

// [3, 3, null, 4, 2];
root = new TreeNode(3);
root.left = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(2);
expected = 3;
result = new Solution().GoodNodes(root);
Console.WriteLine($"{result}, {result == expected}");

// [1];
root = new TreeNode(1);
expected = 1;
result = new Solution().GoodNodes(root);
Console.WriteLine($"{result}, {result == expected}");
