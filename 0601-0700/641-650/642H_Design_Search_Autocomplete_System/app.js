// 642. Design Search Autocomplete System
// https://leetcode.com/problems/design-search-autocomplete-system/
/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
  this.root = new TrieNode();
  for (let i = 0; i < sentences.length; i++) {
    this.addToTrie(sentences[i], times[i]);
  }
  this.currSentence = '';
  this.currNode = this.root;
  this.dead = new TrieNode();
  this.compare = (a, b) => {
    const countA = this.currNode.sentences.get(a) ?? 0;
    const countB = this.currNode.sentences.get(b) ?? 0;
    if (countA === countB) {
      return a > b ? -1 : 1;
    }
    return countA - countB;
  };
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c === '#') {
    this.addToTrie(this.currSentence, 1);
    this.currSentence = '';
    this.currNode = this.root;
    return [];
  }

  this.currSentence += c;
  if (!this.currNode.children.has(c)) {
    this.currNode = this.dead;
    return [];
  }

  this.currNode = this.currNode.children.get(c);
  const heap = new Heap([], this.compare);
  for (const [sentence] of this.currNode.sentences) {
    heap.push(sentence);
    if (heap.length > 3) {
      heap.pop();
    }
  }
  const result = [];
  while (heap.length) {
    result.push(heap.pop());
  }
  return result.reverse();
};

/**
 * @param {string} sentence
 * @param {number} count
 * @return {void}
 */
AutocompleteSystem.prototype.addToTrie = function (sentence, count) {
  let node = this.root;
  for (const ch of sentence) {
    if (!node.children.has(ch)) {
      node.children.set(ch, new TrieNode());
    }
    node = node.children.get(ch);
    const prevCount = node.sentences.get(sentence) ?? 0;
    node.sentences.set(sentence, prevCount + count);
  }
};

class TrieNode {
  constructor() {
    this.children = new Map();
    this.sentences = new Map();
  }
}

class Heap {
  constructor(data = [], compare = (a, b) => a - b) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
  }

  push(item) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }

  pop() {
    if (this.length === 0) return undefined;

    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;

    if (this.length > 0) {
      this.data[0] = bottom;
      this._down(0);
    }

    return top;
  }

  peek() {
    return this.data[0];
  }

  _up(pos) {
    const { data, compare } = this;
    const item = data[pos];

    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (compare(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }

    data[pos] = item;
  }

  _down(pos) {
    const { data, compare } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];

    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;

      if (right < this.length && compare(data[right], best) < 0) {
        left = right;
        best = data[right];
      }
      if (compare(best, item) >= 0) break;

      data[pos] = best;
      pos = left;
    }

    data[pos] = item;
  }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

var obj = null;
var ops = ['AutocompleteSystem', 'input', 'input', 'input', 'input'];
var inputs = [
  [
    ['i love you', 'island', 'iroman', 'i love leetcode'],
    [5, 3, 2, 2],
  ],
  ['i'],
  [' '],
  ['a'],
  ['#'],
];
var outputs = [null, ['i love you', 'island', 'i love leetcode'], ['i love you', 'i love leetcode'], [], []];
for (let i = 0; i < ops.length; i++) {
  const args = inputs[i];
  if (ops[i] === 'AutocompleteSystem') {
    obj = new AutocompleteSystem(...args);
  } else {
    const result = obj.input(args[0]);
    const expected = outputs[i];
    console.log(i, args, result, result.join() === expected.join());
  }
}

var obj = null;
var ops = [
  'AutocompleteSystem',
  'input',
  'input',
  'input',
  'input',
  'input',
  'input',
  'input',
  'input',
  'input',
  'input',
  'input',
  'input',
];
var inputs = [
  [
    ['i love you', 'island', 'iroman', 'i love leetcode'],
    [5, 3, 2, 2],
  ],
  ['i'],
  [' '],
  ['a'],
  ['#'],
  ['i'],
  [' '],
  ['a'],
  ['#'],
  ['i'],
  [' '],
  ['a'],
  ['#'],
];
var outputs = [
  null,
  ['i love you', 'island', 'i love leetcode'],
  ['i love you', 'i love leetcode'],
  [],
  [],
  ['i love you', 'island', 'i love leetcode'],
  ['i love you', 'i love leetcode', 'i a'],
  ['i a'],
  [],
  ['i love you', 'island', 'i a'],
  ['i love you', 'i a', 'i love leetcode'],
  ['i a'],
  [],
];
for (let i = 0; i < ops.length; i++) {
  const args = inputs[i];
  if (ops[i] === 'AutocompleteSystem') {
    obj = new AutocompleteSystem(...args);
  } else {
    const result = obj.input(args[0]);
    const expected = outputs[i];
    console.log(i, args, result, expected, result.join() === expected.join());
  }
}
