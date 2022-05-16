var permute = (nums) => {
  const result = [];
  const end = nums.length - 1;

  const func = (start = 0) => {
    if (start === end) {
      result.push([...nums]);
    } else {
      for (let i = start; i <= end; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];
        func(start + 1);
        [nums[start], nums[i]] = [nums[i], nums[start]];
      }
    }
  };

  func();
  return result;
};

var printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i].join(" "));
  }
};

var nums = [1, 2, 3];
console.log(printArray(permute(nums)));
