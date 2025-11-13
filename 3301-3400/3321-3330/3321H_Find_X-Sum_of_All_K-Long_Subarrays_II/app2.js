// 3321. Find X-Sum of All K-Long Subarrays II
// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const n = nums.length;
  let res = [],
    sum = 0;
  let freqMap = new Map(),
    top = new OrderedSet(),
    rest = new OrderedSet();

  for (let i = 0; i < n; i++) {
    let count = freqMap.get(nums[i]) || 0;
    if (count > 0) {
      if (rest.find(nums[i], count)) {
        rest.delete(nums[i], count);
      } else {
        top.delete(nums[i], count);
        sum -= nums[i] * count;
      }
    }

    freqMap.set(nums[i], count + 1);
    top.insert(nums[i], count + 1);
    sum += nums[i] * (count + 1);

    if (top.size > x) {
      const [minNum, minCount] = top.getMin();
      sum -= minNum * minCount;
      rest.insert(minNum, minCount);
      top.delete(minNum, minCount);
    }

    if (i >= k) {
      const leftCount = freqMap.get(nums[i - k]);
      if (rest.find(nums[i - k], leftCount)) {
        rest.delete(nums[i - k], leftCount);
      } else {
        top.delete(nums[i - k], leftCount);
        sum -= leftCount * nums[i - k];
      }

      freqMap.set(nums[i - k], leftCount - 1);
      if (leftCount - 1 > 0) {
        rest.insert(nums[i - k], leftCount - 1);
      }
      if (top.size < x && rest.size > 0) {
        const [maxNum, maxCount] = rest.getMax();
        sum += maxNum * maxCount;
        top.insert(maxNum, maxCount);
        rest.delete(maxNum, maxCount);
      }
    }
    if (i >= k - 1) {
      res.push(sum);
    }
  }
  return res;
};

class RBTreeNode {
  constructor(key, value, nilNode) {
    this.key = key;
    this.value = value;
    this.color = 'red';
    this.left = nilNode;
    this.right = nilNode;
    this.parent = nilNode;
  }

  isRed() {
    return this.color === 'red';
  }
}

class RBTree {
  constructor() {
    this.nil = new RBTreeNode(null, null, null);
    this.nil.color = 'black';
    this.root = this.nil;
  }

  compare(node1, node2) {
    if (node1.value !== node2.value) {
      return node1.value - node2.value;
    }
    return node1.key - node2.key;
  }

  insert(key, value) {
    let z = new RBTreeNode(key, value, this.nil);
    let y = this.nil;
    let x = this.root;
    while (x !== this.nil) {
      y = x;
      if (this.compare(z, x) < 0) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    z.parent = y;
    if (y === this.nil) {
      this.root = z;
    } else if (this.compare(z, y) < 0) {
      y.left = z;
    } else {
      y.right = z;
    }

    z.left = this.nil;
    z.right = this.nil;
    z.color = 'red';

    this.insertFixup(z);
  }

  delete(key, value) {
    let node = this.root;
    let targetNode = null;
    while (node !== this.nil) {
      let tempNode = new RBTreeNode(key, value, this.nil);
      if (this.compare(tempNode, node) === 0) {
        targetNode = node;
        break;
      } else if (this.compare(tempNode, node) < 0) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    if (targetNode) {
      this._deleteNode(targetNode);
    }
  }

  _deleteNode(node) {
    let y = node;
    let yOriginalColor = y.color;
    let x;

    if (node.left === this.nil) {
      x = node.right;
      this.transplant(node, node.right);
    } else if (node.right === this.nil) {
      x = node.left;
      this.transplant(node, node.left);
    } else {
      y = this.minimum(node.right);
      yOriginalColor = y.color;
      x = y.right;
      if (y.parent === node) {
        x.parent = y;
      } else {
        this.transplant(y, y.right);
        y.right = node.right;
        y.right.parent = y;
      }
      this.transplant(node, y);
      y.left = node.left;
      y.left.parent = y;
      y.color = node.color;
    }

    if (yOriginalColor === 'black') {
      this.deleteFixup(x);
    }
  }

  transplant(u, v) {
    if (u.parent === this.nil) {
      this.root = v;
    } else if (u === u.parent.left) {
      u.parent.left = v;
    } else {
      u.parent.right = v;
    }
    v.parent = u.parent;
  }

  minimum(node) {
    while (node.left !== this.nil) {
      node = node.left;
    }
    return node;
  }

  maximum(node) {
    while (node.right !== this.nil) {
      node = node.right;
    }
    return node;
  }

  deleteFixup(x) {
    while (x !== this.root && !x.isRed()) {
      if (x === x.parent.left) {
        let w = x.parent.right;
        if (w.isRed()) {
          w.color = 'black';
          x.parent.color = 'red';
          this.leftRotate(x.parent);
          w = x.parent.right;
        }
        if (!w.left.isRed() && !w.right.isRed()) {
          w.color = 'red';
          x = x.parent;
        } else {
          if (!w.right.isRed()) {
            w.left.color = 'black';
            w.color = 'red';
            this.rightRotate(w);
            w = x.parent.right;
          }
          w.color = x.parent.color;
          x.parent.color = 'black';
          w.right.color = 'black';
          this.leftRotate(x.parent);
          x = this.root;
        }
      } else {
        let w = x.parent.left;
        if (w.isRed()) {
          w.color = 'black';
          x.parent.color = 'red';
          this.rightRotate(x.parent);
          w = x.parent.left;
        }
        if (!w.right.isRed() && !w.left.isRed()) {
          w.color = 'red';
          x = x.parent;
        } else {
          if (!w.left.isRed()) {
            w.right.color = 'black';
            w.color = 'red';
            this.leftRotate(w);
            w = x.parent.left;
          }
          w.color = x.parent.color;
          x.parent.color = 'black';
          w.left.color = 'black';
          this.rightRotate(x.parent);
          x = this.root;
        }
      }
    }
    x.color = 'black';
  }

  insertFixup(z) {
    while (z.parent.isRed()) {
      if (z.parent === z.parent.parent.left) {
        let y = z.parent.parent.right;
        if (y.isRed()) {
          z.parent.color = 'black';
          y.color = 'black';
          z.parent.parent.color = 'red';
          z = z.parent.parent;
        } else {
          if (z === z.parent.right) {
            z = z.parent;
            this.leftRotate(z);
          }
          z.parent.color = 'black';
          z.parent.parent.color = 'red';
          this.rightRotate(z.parent.parent);
        }
      } else {
        let y = z.parent.parent.left;
        if (y.isRed()) {
          z.parent.color = 'black';
          y.color = 'black';
          z.parent.parent.color = 'red';
          z = z.parent.parent;
        } else {
          if (z === z.parent.left) {
            z = z.parent;
            this.rightRotate(z);
          }
          z.parent.color = 'black';
          z.parent.parent.color = 'red';
          this.leftRotate(z.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  leftRotate(x) {
    let y = x.right;
    x.right = y.left;
    if (y.left !== this.nil) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === this.nil) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  rightRotate(x) {
    let y = x.left;
    x.left = y.right;
    if (y.right !== this.nil) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === this.nil) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.right = x;
    x.parent = y;
  }
}

class OrderedSet {
  constructor() {
    this.rbTree = new RBTree();
    this.size = 0;
  }

  insert(key, value) {
    this.rbTree.insert(key, value);
    this.size++;
  }

  find(key, value) {
    let node = this.rbTree.root;
    let targetNode = null;
    let tempNode = new RBTreeNode(key, value, this.rbTree.nil);

    while (node !== this.rbTree.nil) {
      if (this.rbTree.compare(tempNode, node) === 0) {
        targetNode = node;
        break;
      } else if (this.rbTree.compare(tempNode, node) < 0) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return targetNode ? targetNode.value : null;
  }

  delete(key, value) {
    this.rbTree.delete(key, value);
    this.size--;
  }

  getMin() {
    let node = this.rbTree.minimum(this.rbTree.root);
    return [node.key, node.value];
  }

  getMax() {
    let node = this.rbTree.maximum(this.rbTree.root);
    return [node.key, node.value];
  }

  inorderTraversal() {
    const result = [];
    const inorder = (node) => {
      if (node !== this.rbTree.nil) {
        inorder(node.left);
        result.push([node.key, node.value]);
        inorder(node.right);
      }
    };
    inorder(this.rbTree.root);
    return result;
  }
}

var nums = [1, 1, 2, 2, 3, 4, 2, 3],
  k = 6,
  x = 2;
var expected = [6, 10, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());

var nums = [3, 8, 7, 8, 7, 5],
  k = 2,
  x = 2;
var expected = [11, 15, 15, 15, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());
