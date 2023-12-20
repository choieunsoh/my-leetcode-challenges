var generateExprs = function (str, target) {
  const result = [];
  dfs(0, 0, 0, []);
  console.log(result);
  return result;

  function dfs(index, sum, prev, path) {
    if (index === str.length) {
      if (sum === target) {
        const expr = toExpression(path);
        result.push(expr);
      }
      return;
    }

    const num = Number(str[index]);

    // Plus
    dfs(index + 1, sum + num, num, [...path, num]);

    // Minus
    dfs(index + 1, sum - num, -num, [...path, -num]);

    // Concat
    if (path.length) {
      const newSum = sum - prev;
      const newPath = [...path];
      const peek = newPath.pop();
      const newPrev = newPath[newPath.length - 1];
      const newNum = Math.sign(peek) * (10 * Math.abs(peek) + num);
      dfs(index + 1, prev ? newSum + newNum : newNum, newPrev, [...newPath, newNum]);
    }
  }

  function isMinusZero(value) {
    return 1 / value === -Infinity;
  }

  function toExpression(path) {
    const nums = path.map((num, i) => {
      if (i === 0) return `${num}`;
      if (isMinusZero(num)) return '- 0';
      if (num === 0) return '+ 0';
      if (num > 0) return `+ ${num}`;
      return `- ${-num}`;
    });
    return `${nums.join(' ')} = ${target}`;
  }
};

generateExprs('123', 6) == ['1 + 2 + 3'];
generateExprs('125', 7) == ['12 - 5'];
generateExprs('420', 420) == ['420'];
generateExprs('1210', 2) == ['1 + 2 - 1 + 0', '1 + 2 - 1 - 0', '12 - 10'];
