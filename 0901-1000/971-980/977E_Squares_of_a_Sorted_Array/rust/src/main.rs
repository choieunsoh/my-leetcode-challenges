// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/
// T.C.: O(n)
// S.C.: O(n)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut result: Vec<i32> = vec![0; n];
        let mut left: i32 = 0;
        let mut right: i32 = (n as i32) - 1;
        let mut index: i32 = right;
        while left <= right {
            if nums[left as usize].abs() > nums[right as usize].abs() {
                result[index as usize] = nums[left as usize] * nums[left as usize];
                left += 1;
            } else {
                result[index as usize] = nums[right as usize] * nums[right as usize];
                right -= 1;
            }
            index -= 1;
        }
        return result;
    }
}

fn main() {
    let mut nums = vec![-4, -1, 0, 3, 10];
    let mut expected = vec![0, 1, 9, 16, 100];
    test(nums, expected);

    nums = vec![-7, -3, 2, 3, 11];
    expected = vec![4, 9, 9, 49, 121];
    test(nums, expected);

    nums = vec![1];
    expected = vec![1];
    test(nums, expected);
}

fn test(nums: Vec<i32>, expected: Vec<i32>) {
    let result = Solution::sorted_squares(nums.clone());

    println!(
        "\nnums: {:}\nresult: {}\nassert: {}",
        array_colored(nums),
        array_colored(result.clone()),
        bool_colored(result == expected)
    );
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

fn array_colored(nums: Vec<i32>) -> ColoredString {
    let text = format!(
        "[{}]",
        nums
            .iter()
            .map(|x| x.to_string())
            .collect::<Vec<String>>()
            .join(", ")
    );
    return text.yellow();
}
