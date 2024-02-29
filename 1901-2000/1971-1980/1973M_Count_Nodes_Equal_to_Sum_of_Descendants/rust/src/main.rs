// 1973. Count Nodes Equal to Sum of Descendants
// https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/description/
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
    pub fn equal_to_descendants(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut count: i32 = 0;
        Self::dfs(root, &mut count);
        return count;
    }

    fn dfs(root: Option<Rc<RefCell<TreeNode>>>, count: &mut i32) -> i32 {
        if root.is_none() {
            return 0;
        }

        let node = root.unwrap();
        let node_val = node.borrow().val;
        let left = node.borrow().left.clone();
        let right = node.borrow().right.clone();

        let left_sum = Self::dfs(left, count);
        let right_sum = Self::dfs(right, count);
        let sum = left_sum + right_sum;
        if sum == node_val {
            *count += 1;
        }

        return sum + node_val;
    }
}

fn main() {
    // [10,3,4,2,1]
    let mut root = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 10,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 3,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(2)))),
                            right: Some(Rc::new(RefCell::new(TreeNode::new(1)))),
                        })
                    )
                ),
                right: Some(Rc::new(RefCell::new(TreeNode::new(4)))),
            })
        )
    );
    test(root, 2);

    // [2,3,null,2,null]
    root = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 2,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 3,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(2)))),
                            right: None,
                        })
                    )
                ),
                right: None,
            })
        )
    );
    test(root, 0);

    // [0]
    root = Some(Rc::new(RefCell::new(TreeNode::new(0))));
    test(root, 1);

    // [5,2,null,1,null,null,2]
    /*
            5
          /
        2
      /
    1
      \
        2
    */
    root = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 5,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 2,
                            left: Some(
                                Rc::new(
                                    RefCell::new(TreeNode {
                                        val: 1,
                                        left: None,
                                        right: Some(Rc::new(RefCell::new(TreeNode::new(2)))),
                                    })
                                )
                            ),
                            right: None,
                        })
                    )
                ),
                right: None,
            })
        )
    );
    test(root, 1);
}

fn test(root: Option<Rc<RefCell<TreeNode>>>, expected: i32) {
    let result: i32 = Solution::equal_to_descendants(root.clone());

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
