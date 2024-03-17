// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/
// T.C.: O(n)
// S.C.: O(1)
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![];
        let mut new_interval = new_interval;
        for (i, interval) in intervals.iter().enumerate() {
            if new_interval[0] > interval[1] {
                result.push(interval.clone());
            } else if new_interval[1] < interval[0] {
                result.push(new_interval.clone());
                result.extend_from_slice(&intervals[i..]);
                return result;
            } else {
                new_interval[0] = std::cmp::min(new_interval[0], interval[0]);
                new_interval[1] = std::cmp::max(new_interval[1], interval[1]);
            }
        }
        result.push(new_interval.clone());
        return result;
    }
}

fn main() {
    let mut intervals = vec![vec![1, 3], vec![6, 9]];
    let mut new_interval = vec![2, 5];
    let mut expected = vec![vec![1, 5], vec![6, 9]];
    test(intervals, new_interval, expected);

    intervals = vec![vec![1, 2], vec![3, 5], vec![6, 7], vec![8, 10], vec![12, 16]];
    new_interval = vec![4, 8];
    expected = vec![vec![1, 2], vec![3, 10], vec![12, 16]];
    test(intervals, new_interval, expected);

    intervals = vec![vec![1, 3], vec![6, 9]];
    new_interval = vec![3, 5];
    expected = vec![vec![1, 5], vec![6, 9]];
    test(intervals, new_interval, expected);

    intervals = vec![vec![1, 3], vec![6, 9]];
    new_interval = vec![9, 15];
    expected = vec![vec![1, 3], vec![6, 15]];
    test(intervals, new_interval, expected);

    intervals = vec![vec![1, 3], vec![6, 9]];
    new_interval = vec![11, 15];
    expected = vec![vec![1, 3], vec![6, 9], vec![11, 15]];
    test(intervals, new_interval, expected);
}

fn test(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>, expected: Vec<Vec<i32>>) {
    let result = Solution::insert(intervals.clone(), new_interval.clone());

    println!("\nresult: ");
    array_colored(result.clone());
    println!("assert: {}", bool_colored(result == expected));
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

fn array_colored(nums: Vec<Vec<i32>>) {
    nums.iter().for_each(|it| {
        println!("{:#?}", it);
    });
}
