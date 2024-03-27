// 713. Subarray Product Less Than K
// https://leetcode.com/problems/subarray-product-less-than-k/
// T.C.: O(n)
// S.C.: O(1)

use colored::Colorize;
use colored::ColoredString;

struct Solution;
impl Solution {
    pub fn num_subarray_product_less_than_k(nums: Vec<i32>, k: i32) -> i32 {
        if k <= 1 {
            return 0;
        }

        let mut result: usize = 0;
        let mut left = 0;
        let mut product = 1;
        for right in 0..nums.len() {
            product *= nums[right];
            while left < nums.len() && product >= k {
                product /= nums[left];
                left += 1;
            }
            result += right - left + 1;
        }
        return result as i32;
    }
}

fn main() {
    let mut nums = vec![10, 5, 2, 6];
    let mut k = 100;
    let mut expected = 8;
    test(nums, k, expected);

    nums = vec![1, 2, 3];
    k = 0;
    expected = 0;
    test(nums, k, expected);

    nums = vec![1, 1, 1];
    k = 0;
    expected = 0;
    test(nums, k, expected);
}

fn test(nums: Vec<i32>, k: i32, expected: i32) {
    let result = Solution::num_subarray_product_less_than_k(nums, k);
    println!("\nresult: {}\nassert: {}", number_colored(result), bool_colored(result == expected));
}

fn bool_colored(value: bool) -> ColoredString {
    let text;
    if value {
        text = value.to_string().green();
    } else {
        text = value.to_string().red();
    }
    return text;
}

fn number_colored(value: i32) -> ColoredString {
    return value.to_string().yellow();
}
