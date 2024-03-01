// 2864. Maximum Odd Binary Number
// https://leetcode.com/problems/maximum-odd-binary-number/
// T.C.: O(n)
// S.C.: O(n)

use colored::Colorize;
use colored::ColoredString;

struct Solution;
impl Solution {
    pub fn maximum_odd_binary_number(s: String) -> String {
        let n = s.len() as usize;
        let mut count: usize = 0;
        for i in 0..n {
            if s.chars().nth(i).unwrap() == '1' {
                count += 1;
            }
        }

        let mut result: String = String::new();
        for _ in 0..count - 1 {
            result += "1";
        }
        for _ in 0..n - count {
            result += "0";
        }
        result += "1";
        return result;
    }
}

fn main() {
    test("010".to_string(), "001".to_string());
    test("0101".to_string(), "1001".to_string());
    test("000011110".to_string(), "111000001".to_string());
}

fn test(s: String, expected: String) {
    let result: String = Solution::maximum_odd_binary_number(s);

    println!("\nresult: {}\nassert: {}", string_colored(result.clone()), bool_colored(result == expected));
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

fn string_colored(value: String) -> ColoredString {
    return value.to_string().blue();
}
