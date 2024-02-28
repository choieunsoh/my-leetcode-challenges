// 513. Find Bottom Left Tree Value
// https://leetcode.com/problems/find-bottom-left-tree-value/description/
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
    pub fn find_bottom_left_value(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut max_value: i32 = 0;
        let mut max_level: i32 = 0;
        Self::dfs(root, 0, &mut max_value, &mut max_level);
        return max_value;
    }

    fn dfs(root: Option<Rc<RefCell<TreeNode>>>, level: i32, max_value: &mut i32, max_level: &mut i32) {
        if root.is_none() {
            return;
        }

        let node = root.unwrap();
        let left = node.borrow().left.clone();
        let right = node.borrow().right.clone();

        if level == *max_level {
            *max_level = level + 1;
            *max_value = node.borrow().val;
        }

        Self::dfs(left, level + 1, max_value, max_level);
        Self::dfs(right, level + 1, max_value, max_level);
    }
}

fn main() {
    // Example usage
    let root1 = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 2,
                left: Some(Rc::new(RefCell::new(TreeNode::new(1)))),
                right: Some(Rc::new(RefCell::new(TreeNode::new(3)))),
            })
        )
    );
    test(root1, 1);

    let root2 = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 1,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 2,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(4)))),
                            right: None,
                        })
                    )
                ),
                right: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 3,
                            left: Some(
                                Rc::new(
                                    RefCell::new(TreeNode {
                                        val: 5,
                                        left: Some(Rc::new(RefCell::new(TreeNode::new(7)))),
                                        right: None,
                                    })
                                )
                            ),
                            right: Some(Rc::new(RefCell::new(TreeNode::new(6)))),
                        })
                    )
                ),
            })
        )
    );
    test(root2, 7);
}

fn test(root: Option<Rc<RefCell<TreeNode>>>, expected: i32) {
    let result: i32 = Solution::find_bottom_left_value(root.clone());

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
