// 2485. Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/
// T.C.: O(log n)
// S.C.: O(1)

use colored::Colorize;
use colored::ColoredString;

struct Solution;
impl Solution {
    pub fn pivot_integer(n: i32) -> i32 {
        let total_sum = ((n + 1) * n) / 2;
        let mut left = 1;
        let mut right = n;
        while left <= right {
            let mid = (left + right) / 2;
            if mid * mid < total_sum {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if left * left == total_sum {
            return left;
        }
        return -1;
    }
}

fn main() {
    test(8, 6);
    test(1, 1);
    test(4, -1);
}

fn test(n: i32, expected: i32) {
    let result: i32 = Solution::pivot_integer(n);

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
