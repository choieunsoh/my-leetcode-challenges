// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/
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
  public IList<int> RightSideView(TreeNode root)
  {
    var result = new List<int>();

    if (root == null) return new List<int>();

    var queue = new Queue<TreeNode>();
    queue.Enqueue(root);

    while (queue.Count > 0)
    {
      var size = queue.Count;
      var lastNode = 0;
      for (var i = 0; i < size; i++)
      {
        var node = queue.Dequeue();
        lastNode = node.val;
        if (node.left != null) queue.Enqueue(node.left);
        if (node.right != null) queue.Enqueue(node.right);
      }
      result.Add(lastNode);
    }

    return result;
  }
}

// [1, 2, 3, null, 5, null, 4]
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
var expected = new List<int> { 1, 3, 4 };
var result = new Solution().RightSideView(root);
Console.WriteLine($"{string.Join(", ", result)}, {result.SequenceEqual(expected)}");

// [1,2,3,4,null,null,null,5]
root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(5);
expected = new List<int> { 1, 3, 4, 5 };
result = new Solution().RightSideView(root);
Console.WriteLine($"{string.Join(", ", result)}, {result.SequenceEqual(expected)}");

// [1, null, 3]
root = new TreeNode(1);
root.right = new TreeNode(3);
expected = new List<int> { 1, 3 };
result = new Solution().RightSideView(root);
Console.WriteLine($"{string.Join(", ", result)}, {result.SequenceEqual(expected)}");

// []
root = null;
expected = new List<int>();
result = new Solution().RightSideView(root);
Console.WriteLine($"{string.Join(", ", result)}, {result.SequenceEqual(expected)}");
