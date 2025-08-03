// https://www.geeksforgeeks.org/variants-of-binary-search/

function contains(array, key, low = 0, high = array.length - 1) {
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    const midVal = array[mid];
    if (midVal === key) return true;
    if (midVal < key) {
      low = mid + 1;
    } else if (midVal > key) {
      high = mid - 1;
    }
  }
  return false;
}

function first(array, key, low = 0, high = array.length - 1) {
  let ans = -1;
  while (low <= high) {
    const mid = low + Math.floor((high - low + 1) / 2);
    const midVal = array[mid];
    if (midVal === key) {
      ans = mid;
      high = mid - 1;
    } else if (midVal > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function last(array, key, low = 0, high = array.length - 1) {
  let ans = -1;
  while (low <= high) {
    const mid = low + Math.floor((high - low + 1) / 2);
    const midVal = array[mid];
    if (midVal === key) {
      ans = mid;
      low = mid + 1;
    } else if (midVal < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

function leastGreater(array, key, low = 0, high = array.length - 1) {
  let ans = n;
  while (low <= high) {
    const mid = low + Math.floor((high - low + 1) / 2);
    const midVal = array[mid];
    if (midVal <= key) {
      low = mid + 1;
    } else {
      ans = mid;
      high = mid - 1;
    }
  }
  return ans;
}

function greatestLesser(array, key, low = 0, high = array.length - 1) {
  let ans = 0;
  while (low <= high) {
    const mid = low + Math.floor((high - low + 1) / 2);
    const midVal = array[mid];
    if (midVal < key) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

// lowerBound equals to leastGreater
function lowerBound(arr, left, right, val) {
  let result = right + 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= val) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

// upperBound equals to greatestLesser
function upperBound(arr, left, right, val) {
  let result = right + 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > val) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

module.exports = {
  contains,
  first,
  last,
  leastGreater,
  greatestLesser,
  lowerBound,
  upperBound,
};
