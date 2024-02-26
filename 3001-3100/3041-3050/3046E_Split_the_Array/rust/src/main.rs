// 3046. Split the Array
// https://leetcode.com/problems/split-the-array/description/
// T.C.: O(n)
// S.C.: O(n)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn is_possible_to_split(nums: Vec<i32>) -> bool {
        let mut freq: [i32; 101] = [0; 101];
        for num in nums {
            freq[num as usize] += 1;
            if freq[num as usize] > 2 {
                return false;
            }
        }
        return true;
    }
}

fn main() {
    let mut nums = vec![1, 1, 2, 2, 3, 4];
    test(nums, true);

    nums = vec![1; 4];
    test(nums, false);
}

fn test(nums: Vec<i32>, expected: bool) {
    let result: bool = Solution::is_possible_to_split(nums.clone());

    println!(
        "\nnums: {:}\nresult: {}\nassert: {}",
        array_colored(nums),
        bool_colored(result),
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
