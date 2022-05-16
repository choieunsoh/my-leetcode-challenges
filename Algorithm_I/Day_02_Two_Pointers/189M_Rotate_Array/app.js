var rotate1 = (nums, k) => {
  let N = nums.length;
  let move = Math.ceil(N / k);
  let counter = 0;
  for (let x = 0; x < k; x++) {
    let i = 0;
    let j = k + x;
    while (i < move && nums[x] !== undefined) {
      let temp = nums[x];
      nums[x] = nums[j];
      nums[j] = temp;
      //console.log(i, x, j, nums.join(" "));
      j += k;
      i++;
      counter++;
    }
  }

  for (let i = k; i < nums.length; i++) {
    nums[i % N] = nums[i];
    counter++;
  }
  nums.splice(N);
  console.log(counter);
  return nums;
};
var rotate = (nums, k) => {
  let result = [];
  let N = nums.length;
  for (let i = 0; i < N; i++) {
    result[(i + k) % N] = nums[i];
  }
  return result;
};

var nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.log(nums.join(" "));
console.log(rotate(nums, k).join(" "));
