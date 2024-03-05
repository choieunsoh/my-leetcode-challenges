// 1750. Minimum Length of String After Deleting Similar Ends
// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/
// T.C.: O(n)
// S.C.: O(1)

// java main.java
class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();

        String s = "ca";
        int expected = 2;
        int result = solution.minimumLength(s);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        s = "cabaabac";
        expected = 0;
        result = solution.minimumLength(s);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        s = "aabccabba";
        expected = 3;
        result = solution.minimumLength(s);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        s = "bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb";
        expected = 1;
        result = solution.minimumLength(s);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        s = "abbbbbbbbbbbbbbbbbbba";
        expected = 0;
        result = solution.minimumLength(s);
        System.out.println(result + " " + (expected == result ? "true" : "false"));
    }
}

class Solution {
    public int minimumLength(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right && s.charAt(left) == s.charAt(right)) {
            char c = s.charAt(left);
            while (left <= right && s.charAt(left) == c) {
                left++;
            }
            while (right > left && s.charAt(right) == c) {
                right--;
            }
        }

        return right - left + 1;
    }
}
