// 930. Binary Subarrays With Sum
// https://leetcode.com/problems/binary-subarrays-with-sum/
// T.C.: O(n)
// S.C.: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn num_subarrays_with_sum(nums: Vec<i32>, goal: i32) -> i32 {
        let mut current_count = 0;
        let mut left_sum = 0;
        let mut right_sum = 0;
        let mut left = 0;
        let mut right = 0;
        for end in 0..nums.len() {
            left_sum += nums[end];
            while left < end && left_sum > goal {
                left_sum -= nums[left];
                left += 1;
            }

            right_sum += nums[end];
            while right < end && (right_sum > goal || (right_sum == goal && nums[right] == 0)) {
                right_sum -= nums[right];
                right += 1;
            }

            if left_sum == goal {
                current_count += right - left + 1;
            }
        }
        return current_count as i32;
    }
}

fn main() {
    let mut nums = vec![1, 0, 1, 0, 1];
    test(nums, 2, 4);

    nums = vec![0, 0, 0, 0, 0];
    test(nums, 0, 15);

    nums = vec![1, 0, 0, 1, 0, 1];
    test(nums, 2, 5);
}

fn test(nums: Vec<i32>, goal: i32, expected: i32) {
    let result = Solution::num_subarrays_with_sum(nums.clone(), goal);

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
