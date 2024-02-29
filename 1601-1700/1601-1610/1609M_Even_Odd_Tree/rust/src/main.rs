// 1609. Even Odd Tree
// https://leetcode.com/problems/even-odd-tree/description/
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
    pub fn is_even_odd_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let mut queue = Vec::new();
        queue.push(root);
        let mut level = 0;

        while !queue.is_empty() {
            let mut prev_value = 0;
            let mut new_queue = Vec::new();
            for i in 0..queue.len() {
                let node = queue[i].clone().unwrap();
                let val = node.borrow().val;
                let left = node.borrow().left.clone();
                let right = node.borrow().right.clone();
                let level_is_even = level % 2 == 0;
                let val_is_even = val % 2 == 0;

                if level_is_even {
                    if val_is_even {
                        return false;
                    }
                    if prev_value > 0 && prev_value >= val {
                        return false;
                    }
                } else {
                    if !val_is_even {
                        return false;
                    }
                    if prev_value > 0 && prev_value <= val {
                        return false;
                    }
                }

                prev_value = val;
                if left.is_some() {
                    new_queue.push(left);
                }
                if right.is_some() {
                    new_queue.push(right);
                }
            }
            level += 1;
            queue = new_queue;
        }

        return true;
    }
}

fn main() {
    // Example usage
    let root1 = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 1,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 10,
                            left: Some(
                                Rc::new(
                                    RefCell::new(TreeNode {
                                        val: 3,
                                        left: Some(Rc::new(RefCell::new(TreeNode::new(12)))),
                                        right: Some(Rc::new(RefCell::new(TreeNode::new(8)))),
                                    })
                                )
                            ),
                            right: None,
                        })
                    )
                ),
                right: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 4,
                            left: Some(
                                Rc::new(
                                    RefCell::new(TreeNode {
                                        val: 7,
                                        left: Some(Rc::new(RefCell::new(TreeNode::new(6)))),
                                        right: None,
                                    })
                                )
                            ),
                            right: Some(
                                Rc::new(
                                    RefCell::new(TreeNode {
                                        val: 9,
                                        left: Some(Rc::new(RefCell::new(TreeNode::new(2)))),
                                        right: None,
                                    })
                                )
                            ),
                        })
                    )
                ),
            })
        )
    );
    test(root1, true);

    let root2 = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 5,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 4,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(3)))),
                            right: Some(Rc::new(RefCell::new(TreeNode::new(3)))),
                        })
                    )
                ),
                right: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 2,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(7)))),
                            right: None,
                        })
                    )
                ),
            })
        )
    );
    test(root2, false);

    let root3 = Some(
        Rc::new(
            RefCell::new(TreeNode {
                val: 5,
                left: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 9,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(3)))),
                            right: Some(Rc::new(RefCell::new(TreeNode::new(5)))),
                        })
                    )
                ),
                right: Some(
                    Rc::new(
                        RefCell::new(TreeNode {
                            val: 1,
                            left: Some(Rc::new(RefCell::new(TreeNode::new(7)))),
                            right: None,
                        })
                    )
                ),
            })
        )
    );
    test(root3, false);
}

fn test(root: Option<Rc<RefCell<TreeNode>>>, expected: bool) {
    let result: bool = Solution::is_even_odd_tree(root.clone());

    println!("\nresult: {}\nassert: {}", bool_colored(result), bool_colored(result == expected));
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
