// 1634. Add Two Polynomials Represented as Linked Lists
// https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/description/
// T.C.: O(m+n)
// S.C.: O(min(m,n))
/**
 * Definition for polynomial singly-linked list.
 * function PolyNode(x=0, y=0, next=null) {
 *     this.coefficient = x;
 *     this.power = y;
 *     this.next = next;
 * }
 */
class PolyNode {
  constructor(x = 0, y = 0, next = null) {
    this.coefficient = x;
    this.power = y;
    this.next = next;
  }
}

/**
 * @param {PolyNode} poly1
 * @param {PolyNode} poly2
 * @return {PolyNode}
 */
var addPoly = function (poly1, poly2) {
  const dummy = new PolyNode();
  let curr = dummy;
  let currPoly1 = poly1;
  let currPoly2 = poly2;

  while (currPoly1 && currPoly2) {
    if (currPoly1.power > currPoly2.power) {
      curr.next = new PolyNode(currPoly1.coefficient, currPoly1.power);
      currPoly1 = currPoly1.next;
      curr = curr.next;
    } else if (currPoly1.power < currPoly2.power) {
      curr.next = new PolyNode(currPoly2.coefficient, currPoly2.power);
      currPoly2 = currPoly2.next;
      curr = curr.next;
    } else {
      const coefficient = currPoly1.coefficient + currPoly2.coefficient;
      if (coefficient) {
        curr.next = new PolyNode(coefficient, currPoly1.power);
        curr = curr.next;
      }
      currPoly1 = currPoly1.next;
      currPoly2 = currPoly2.next;
    }
  }

  if (currPoly1) {
    curr.next = currPoly1;
  }

  if (currPoly2) {
    curr.next = currPoly2;
  }

  return dummy.next;
};

/*var poly1 = [[1, 1]],
  poly2 = [[1, 0]];*/
var poly1 = {
    coefficient: 1,
    power: 1,
    next: null,
  },
  poly2 = {
    coefficient: 1,
    power: 0,
    next: null,
  };
/*var expected = [
  [1, 1],
  [1, 0],
];*/
var expected = {
  coefficient: 1,
  power: 1,
  next: {
    coefficient: 1,
    power: 0,
    next: null,
  },
};
var result = addPoly(poly1, poly2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

/*var poly1 = [
    [2, 2],
    [4, 1],
    [3, 0],
  ],
  poly2 = [
    [3, 2],
    [-4, 1],
    [-1, 0],
  ];*/
var poly1 = {
    coefficient: 2,
    power: 2,
    next: {
      coefficient: 4,
      power: 1,
      next: {
        coefficient: 3,
        power: 0,
        next: null,
      },
    },
  },
  poly2 = {
    coefficient: 3,
    power: 2,
    next: {
      coefficient: -4,
      power: 1,
      next: {
        coefficient: -1,
        power: 0,
        next: null,
      },
    },
  };
/*var expected = [
  [5, 2],
  [2, 0],
];*/
var expected = {
  coefficient: 5,
  power: 2,
  next: {
    coefficient: 2,
    power: 0,
    next: null,
  },
};
var result = addPoly(poly1, poly2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

/*var poly1 = [[1, 2]],
  poly2 = [[-1, 2]];*/
var poly1 = {
    coefficient: 1,
    power: 2,
    next: null,
  },
  poly2 = {
    coefficient: -1,
    power: 2,
    next: null,
  };
/*var expected = [];*/
var expected = null;
var result = addPoly(poly1, poly2);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
