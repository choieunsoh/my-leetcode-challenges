// 236. Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
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
  public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)
  {
    if (root == null || root == p || root == q)
    {
      return root;
    }

    TreeNode left = LowestCommonAncestor(root.left, p, q);
    TreeNode right = LowestCommonAncestor(root.right, p, q);

    return left != null && right != null ? root : left ?? right;
  }
}

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
// [5, 6, 2, null, null, 6, 4],
// [1, 0, 8];
var root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
var p = new TreeNode(5);
p.left = new TreeNode(6);
p.right = new TreeNode(2);
p.right.left = new TreeNode(7);
p.right.right = new TreeNode(4);
var q = new TreeNode(1);
q.left = new TreeNode(0);
q.right = new TreeNode(8);
var expected = 3;
var result = new Solution().LowestCommonAncestor(root, p, q);
Console.WriteLine($"{result?.val}, {result?.val == expected}");

// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
// [5, 6, 2, null, null, 7, 4],
// [4],
root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
p = new TreeNode(5);
p.left = new TreeNode(6);
p.right = new TreeNode(2);
p.right.left = new TreeNode(7);
p.right.right = new TreeNode(4);
q = new TreeNode(4);
expected = 5;
result = new Solution().LowestCommonAncestor(root, p, q);
Console.WriteLine($"{result?.val}, {result?.val == expected}");

// [1, 2],
// [1, 2],
// [2],
root = new TreeNode(1);
root.left = new TreeNode(2);
p = new TreeNode(1);
p.left = new TreeNode(2);
q = new TreeNode(2);
expected = 1;
result = new Solution().LowestCommonAncestor(root, p, q);
Console.WriteLine($"{result?.val}, {result?.val == expected}");
