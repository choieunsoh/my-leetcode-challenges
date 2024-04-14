// 631. Design Excel Sum Formula
// https://leetcode.com/problems/design-excel-sum-formula/description/
// T.C.: O(n)
// S.C.: O(n^2)
class Excel {
  constructor(height, width) {
    this.formulas = Array.from({ length: height }, () =>
      new Array(width.charCodeAt(0) - 'A'.charCodeAt(0) + 1).fill(null)
    );
    this.stack = [];
  }

  get(row, column) {
    const val = this.formulas[row - 1][column.charCodeAt(0) - 'A'.charCodeAt(0)];
    return val instanceof Formula ? val.val : 0;
  }

  set(row, column, val) {
    this.formulas[row - 1][column.charCodeAt(0) - 'A'.charCodeAt(0)] = new Formula({}, val);
    this.topologicalSort(row - 1, column.charCodeAt(0) - 'A'.charCodeAt(0));
    this.executeStack();
  }

  sum(row, column, numbers) {
    const cells = this.convert(numbers);
    const sum = this.calculateSum(row - 1, column.charCodeAt(0) - 'A'.charCodeAt(0), cells);
    this.set(row, column, sum);
    this.formulas[row - 1][column.charCodeAt(0) - 'A'.charCodeAt(0)] = new Formula(cells, sum);
    return sum;
  }

  topologicalSort(r, c) {
    for (let i = 0; i < this.formulas.length; i++) {
      for (let j = 0; j < this.formulas[0].length; j++) {
        if (
          this.formulas[i][j] !== null &&
          this.formulas[i][j].cells.hasOwnProperty(String.fromCharCode('A'.charCodeAt(0) + c) + (r + 1))
        ) {
          this.topologicalSort(i, j);
        }
      }
    }
    this.stack.push([r, c]);
  }

  executeStack() {
    while (this.stack.length > 0) {
      const top = this.stack.pop();
      if (Object.keys(this.formulas[top[0]][top[1]].cells).length > 0)
        this.calculateSum(top[0], top[1], this.formulas[top[0]][top[1]].cells);
    }
  }

  convert(strs) {
    const res = {};
    for (const st of strs) {
      if (!st.includes(':')) res[st] = (res[st] || 0) + 1;
      else {
        const cells = st.split(':');
        const si = parseInt(cells[0].substring(1)),
          ei = parseInt(cells[1].substring(1));
        const sj = cells[0].charAt(0),
          ej = cells[1].charAt(0);
        for (let i = si; i <= ei; i++) {
          for (let j = sj.charCodeAt(0); j <= ej.charCodeAt(0); j++) {
            const key = String.fromCharCode(j) + i;
            res[key] = (res[key] || 0) + 1;
          }
        }
      }
    }
    return res;
  }

  calculateSum(row, column, cells) {
    let sum = 0;
    for (const s in cells) {
      const x = Number(s.substring(1)) - 1;
      const y = s.charCodeAt(0) - 'A'.charCodeAt(0);
      sum += (this.formulas[x][y] !== null ? this.formulas[x][y].val : 0) * cells[s];
    }
    this.formulas[row][column] = new Formula(cells, sum);
    return sum;
  }
}

class Formula {
  constructor(cells, val) {
    this.cells = cells;
    this.val = val;
  }
}

/**
 * Your Excel object will be instantiated and called as such:
 * var obj = new Excel(height, width)
 * obj.set(row,column,val)
 * var param_2 = obj.get(row,column)
 * var param_3 = obj.sum(row,column,numbers)
 */
