var generateParenthesis = function (n) {
  const result = [];

  const gen = (curr = [], count = 0) => {
    if (count > n || count < 0) return;
    if (curr.length === n * 2) {
      if (count === 0) {
        result.push(curr.join(""));
      }
      return;
    }
    curr.push("(");
    gen(curr, count + 1);
    curr.pop();

    curr.push(")");
    gen(curr, count - 1);
    curr.pop();
  };
  gen();
  return result;
};

console.log(generateParenthesis(3));
