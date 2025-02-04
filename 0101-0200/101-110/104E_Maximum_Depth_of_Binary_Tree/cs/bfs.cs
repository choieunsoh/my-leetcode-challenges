// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
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
  public int MaxDepth(TreeNode root)
  {
    if (root == null)
    {
      return 0;
    }

    Queue<Tuple<TreeNode, int>> queue = new Queue<Tuple<TreeNode, int>>();
    queue.Enqueue(new Tuple<TreeNode, int>(root, 0));

    int maxDepth = 0;
    while (queue.Count > 0)
    {
      var (node, depth) = queue.Dequeue();
      var nextDepth = depth + 1;
      maxDepth = Math.Max(maxDepth, nextDepth);

      if (node.left != null)
      {
        queue.Enqueue(new Tuple<TreeNode, int>(node.left, nextDepth));
      }

      if (node.right != null)
      {
        queue.Enqueue(new Tuple<TreeNode, int>(node.right, nextDepth));
      }
    }

    return maxDepth;
  }
}

// [3, 9, 20, null, null, 15, 7]
var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
var expect = 3;
var result = new Solution().MaxDepth(root);
Console.WriteLine($"{result}, {result == expect}");

// [1, null, 2]
root = new TreeNode(1);
root.right = new TreeNode(2);
expect = 2;
result = new Solution().MaxDepth(root);
Console.WriteLine($"{result}, {result == expect}");
