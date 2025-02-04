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
    return CountGoodNodes(root, root.val);
  }

  private int CountGoodNodes(TreeNode node, int max)
  {
    if (node == null)
    {
      return 0;
    }

    var count = node.val >= max ? 1 : 0;
    count += CountGoodNodes(node.left, Math.Max(max, node.val));
    count += CountGoodNodes(node.right, Math.Max(max, node.val));

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
