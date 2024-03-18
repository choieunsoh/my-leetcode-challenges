// 452. Minimum Number of Arrows to Burst Balloons
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// T.C.: O(N * log(N))
// S.C.: O(N)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn find_min_arrow_shots(points: Vec<Vec<i32>>) -> i32 {
        let mut arrows = 1;
        let mut points = points;
        points.sort_by(|a, b| a[1].cmp(&b[1]));
        let mut end_point = points[0][1];
        for i in 1..points.len() {
            if points[i][0] > end_point {
                arrows += 1;
                end_point = points[i][1];
            }
        }
        return arrows;
    }
}

fn main() {
    let mut points = vec![vec![10, 16], vec![2, 8], vec![1, 6], vec![7, 12]];
    test(points, 2);

    points = vec![vec![1, 2], vec![3, 4], vec![5, 6], vec![7, 8]];
    test(points, 4);

    points = vec![vec![1, 2], vec![2, 3], vec![3, 4], vec![4, 5]];
    test(points, 2);
}

fn test(points: Vec<Vec<i32>>, expected: i32) {
    let result = Solution::find_min_arrow_shots(points.clone());

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
