export class TreeNode {
  constructor(
    public val: number | null | undefined,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
export function buildTreeLeekCode(inputArray: number[]): TreeNode {
  const root = new TreeNode(inputArray.shift());
  const queue = [root];
  while (queue.length > 0 && inputArray.length > 0) {
    const curNode = queue.shift()!;
    const leftVal = inputArray.shift();
    const rightVal = inputArray.shift();
    if (leftVal !== null) {
      curNode.left = new TreeNode(leftVal);
      queue.push(curNode.left);
    }
    if (rightVal !== null) {
      curNode.right = new TreeNode(rightVal);
      queue.push(curNode.right);
    }
  }

  return root;
}
