var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};

for (let i = 0; i < 130; i++) {
  console.log(i, isPowerOfTwo(i));
}
