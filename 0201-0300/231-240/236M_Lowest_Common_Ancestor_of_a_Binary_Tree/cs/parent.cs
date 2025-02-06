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
    // Stack for tree traversal
    Stack<TreeNode> stack = new Stack<TreeNode>();

    // Dictionary for parent pointers
    Dictionary<TreeNode, TreeNode> parent = new Dictionary<TreeNode, TreeNode>();

    parent[root] = null;
    stack.Push(root);

    // Iterate until we find both the nodes p and q
    while (!parent.ContainsKey(p) || !parent.ContainsKey(q))
    {
      TreeNode node = stack.Pop();

      // While traversing the tree, keep saving the parent pointers.
      if (node.left != null)
      {
        parent[node.left] = node;
        stack.Push(node.left);
      }
      if (node.right != null)
      {
        parent[node.right] = node;
        stack.Push(node.right);
      }
    }

    // Ancestors set for node p.
    HashSet<TreeNode> ancestors = new HashSet<TreeNode>();

    // Process all ancestors for node p using parent pointers.
    while (p != null)
    {
      ancestors.Add(p);
      p = parent[p];
    }

    // The first ancestor of q which appears in p's ancestor set is their lowest common ancestor.
    while (!ancestors.Contains(q))
    {
      q = parent[q];
    }

    return q;
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
