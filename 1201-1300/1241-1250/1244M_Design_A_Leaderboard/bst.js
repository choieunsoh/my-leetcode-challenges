// 1244. Design A Leaderboard
// https://leetcode.com/problems/design-a-leaderboard/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n log k)
// S.C.: O(n)

class Leaderboard {
  constructor() {
    this.hashMap = new Map();
    this.bst = new BST();
  }

  addScore(playerId, score) {
    if (!this.hashMap.has(playerId)) {
      this.hashMap.set(playerId, score);
      this.bst.insert(playerId, score);
    } else {
      const oldScore = this.hashMap.get(playerId);
      const newScore = oldScore + score;
      this.hashMap.set(playerId, newScore);
      this.bst.delete(playerId, oldScore);
      this.bst.insert(playerId, newScore);
    }
  }

  top(k) {
    return this.bst.topK(k);
  }

  reset(playerId) {
    if (!this.hashMap.has(playerId)) return;
    const oldScore = this.hashMap.get(playerId);
    this.bst.delete(playerId, oldScore);
    this.hashMap.delete(playerId);
  }
}

class BSTNode {
  constructor(score, player) {
    this.score = score;
    this.players = new Set([player]);
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(player, score) {
    if (this.root === null) {
      this.root = new BSTNode(score, player);
      return;
    }
    let cur = this.root;
    while (cur !== null) {
      if (score < cur.score) {
        if (!cur.left) {
          cur.left = new BSTNode(score, player);
          return;
        }
        cur = cur.left;
      } else if (score > cur.score) {
        if (!cur.right) {
          cur.right = new BSTNode(score, player);
          return;
        }
        cur = cur.right;
      } else {
        break;
      }
    }
    cur.players.add(player);
  }

  delete(player, score) {
    let cur = this.root;
    while (cur !== null) {
      if (score < cur.score) {
        cur = cur.left;
      } else if (score > cur.score) {
        cur = cur.right;
      } else {
        break;
      }
    }
    cur.players.delete(player);
  }

  topK(k) {
    let total = 0;
    const inorder = (node) => {
      if (node === null) {
        return;
      }
      inorder(node.right);
      const toConsider = Math.min(node.players.size, k);
      total += node.score * toConsider;
      k -= toConsider;
      inorder(node.left);
    };
    inorder(this.root);
    return total;
  }
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

function run(ops, inputs, outputs) {
  var obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'Leaderboard') {
      obj = new Leaderboard();
    } else {
      const result = obj[ops[i]](...args) ?? null;
      const expected = outputs[i];
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = [
    'Leaderboard',
    'addScore',
    'addScore',
    'addScore',
    'addScore',
    'addScore',
    'top',
    'reset',
    'reset',
    'addScore',
    'top',
  ],
  inputs = [[], [1, 73], [2, 56], [3, 39], [4, 51], [5, 4], [1], [1], [2], [2, 51], [3]],
  outputs = [null, null, null, null, null, null, 73, null, null, null, 141];
run(ops, inputs, outputs);
