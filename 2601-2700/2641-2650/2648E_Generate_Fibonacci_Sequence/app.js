// 2648. Generate Fibonacci Sequence
// https://leetcode.com/problems/generate-fibonacci-sequence/
/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let a = 0;
  let b = 1;
  yield a;
  yield b;
  while (true) {
    const c = a + b;
    yield c;
    [a, b] = [b, c];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

var gen = fibGenerator();
var callCount = 5;
var outputs = [0, 1, 1, 2, 3];
for (let i = 0; i < callCount; i++) {
  const expected = outputs[i];
  const result = gen.next().value;
  console.log(result, result === expected);
}

var gen = fibGenerator();
var callCount = 50;
var outputs = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368,
  75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817,
  39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073,
  4807526976, 7778742049,
];
for (let i = 0; i < callCount; i++) {
  const expected = outputs[i];
  const result = gen.next().value;
  console.log(result, result === expected);
}
