// 948. Bag of Tokens
// https://leetcode.com/problems/bag-of-tokens/description/
// T.C.: O(n log n)
// S.C.: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn bag_of_tokens_score(tokens: Vec<i32>, power: i32) -> i32 {
        if tokens.len() == 0 {
            return 0;
        }
        let mut max_score: i32 = 0;
        let mut score: i32 = 0;
        let mut current_power = power;
        let mut left = 0;
        let mut right = tokens.len() - 1;
        let mut sorted_tokens = tokens.clone();
        sorted_tokens.sort_unstable();
        while left <= right {
            if current_power >= sorted_tokens[left] {
                current_power -= sorted_tokens[left];
                score += 1;
                left += 1;
                max_score = std::cmp::max(max_score, score);
            } else if score > 0 {
                score -= 1;
                current_power += sorted_tokens[right];
                right -= 1;
            } else {
                break;
            }
        }

        return max_score;
    }
}

fn main() {
    let mut tokens = vec![100];
    test(tokens, 50, 0);

    tokens = vec![200, 100];
    test(tokens, 150, 1);

    tokens = vec![100, 200, 300, 400];
    test(tokens, 200, 2);

    tokens = vec![33, 4, 28, 24, 96];
    test(tokens, 35, 3);

    tokens = Vec::new();
    test(tokens, 50, 0);
}

fn test(tokens: Vec<i32>, power: i32, expected: i32) {
    let result = Solution::bag_of_tokens_score(tokens.clone(), power);

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
