// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/
// T.C.: O(n)
// S.C.: O(n)

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

use std::rc::Rc;
use std::cell::RefCell;
use colored::Colorize;
use colored::ColoredString;

struct Solution;

impl Solution {
    pub fn diameter_of_binary_tree(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        return Self::dfs(root).1 - 1;
    }

    fn dfs(root: Option<Rc<RefCell<TreeNode>>>) -> (i32, i32) {
        if root.is_none() {
            return (0, 0);
        }

        let root = root.unwrap();
        let left = root.borrow().left.clone();
        let right = root.borrow().right.clone();

        let nodes_left = Self::dfs(left);
        let nodes_right = Self::dfs(right);

        let max_diameter_found = nodes_left.1.max(nodes_right.1).max(nodes_left.0 + nodes_right.0 + 1);
        let max_children = nodes_left.0.max(nodes_right.0) + 1;

        return (max_children, max_diameter_found);
    }
}

fn main() {
    // Example usage
    let root = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 1,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 2,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(4)))),
                            right: Some(Rc::new(RefCell::new(TreeNode::new(5)))),
                        })
                    )
                ),
                right: Some(Rc::new(RefCell::new(TreeNode::new(3)))),
            })
        )
    );

    test(root, 3);
}

fn test(root: Option<Rc<RefCell<TreeNode>>>, expected: i32) {
    let result: i32 = Solution::diameter_of_binary_tree(root.clone());

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
