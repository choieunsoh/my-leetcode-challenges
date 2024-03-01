// 3062. Winner of the Linked List Game
// https://leetcode.com/problems/winner-of-the-linked-list-game/description/
// T.O.: O(n)
// S.C.: O(1)

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode {
            next: None,
            val,
        }
    }
}

use colored::Colorize;
use colored::ColoredString;

struct Solution;
impl Solution {
    pub fn game_result(head: Option<Box<ListNode>>) -> String {
        let mut even_wins = 0;
        let mut odd_wins = 0;
        let mut even = head.as_ref();
        let mut odd = head.as_ref().and_then(|node| node.next.as_ref());
        while let (Some(even_node), Some(odd_node)) = (even, odd) {
            if even_node.val > odd_node.val {
                even_wins += 1;
            } else {
                odd_wins += 1;
            }
            even = even_node.next.as_ref().and_then(|node| node.next.as_ref());
            odd = odd_node.next.as_ref().and_then(|node| node.next.as_ref());
        }

        if even_wins == odd_wins {
            String::from("Tie")
        } else if even_wins > odd_wins {
            String::from("Even")
        } else {
            String::from("Odd")
        }
    }
}

fn main() {
    // [2, 1]
    let mut head = Some(
        Box::new(ListNode {
            val: 2,
            next: Some(Box::new(ListNode::new(1))),
        })
    );
    test(head, "Even".to_string());

    // [2, 5, 4, 7, 20, 5];
    head = Some(
        Box::new(ListNode {
            val: 2,
            next: Some(
                Box::new(ListNode {
                    val: 5,
                    next: Some(
                        Box::new(ListNode {
                            val: 4,
                            next: Some(
                                Box::new(ListNode {
                                    val: 7,
                                    next: Some(
                                        Box::new(ListNode {
                                            val: 20,
                                            next: Some(Box::new(ListNode::new(5))),
                                        })
                                    ),
                                })
                            ),
                        })
                    ),
                })
            ),
        })
    );
    test(head, "Odd".to_string());

    // [4, 5, 2, 1];
    head = Some(
        Box::new(ListNode {
            val: 4,
            next: Some(
                Box::new(ListNode {
                    val: 5,
                    next: Some(
                        Box::new(ListNode {
                            val: 2,
                            next: Some(Box::new(ListNode::new(1))),
                        })
                    ),
                })
            ),
        })
    );
    test(head, "Tie".to_string());
}

fn test(head: Option<Box<ListNode>>, expected: String) {
    let result: String = Solution::game_result(head);

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
