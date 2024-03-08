// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/description/
// T.C: O(1)
// S.C: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn find_center(edges: Vec<Vec<i32>>) -> i32 {
        for node in edges.get(0).unwrap() {
            for next_node in edges.get(1).unwrap() {
                if node == next_node {
                    return *node;
                }
            }
        }
        return 0;
    }
}

fn main() {
    let mut edges = vec![vec![1, 2], vec![2, 3], vec![4, 2]];
    test(edges, 2);

    edges = vec![vec![1, 2], vec![5, 1], vec![1, 3], vec![1, 4]];
    test(edges, 1);

    edges = vec![
        vec![1, 18],
        vec![18, 2],
        vec![3, 18],
        vec![18, 4],
        vec![18, 5],
        vec![6, 18],
        vec![18, 7],
        vec![18, 8],
        vec![18, 9],
        vec![18, 10],
        vec![18, 11],
        vec![12, 18],
        vec![18, 13],
        vec![18, 14],
        vec![15, 18],
        vec![16, 18],
        vec![17, 18]
    ];
    test(edges, 18);
}

fn test(edges: Vec<Vec<i32>>, expected: i32) {
    let result = Solution::find_center(edges.clone());

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
