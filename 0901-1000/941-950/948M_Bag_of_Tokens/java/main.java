// 948. Bag of Tokens
// https://leetcode.com/problems/bag-of-tokens/description/
// T.C.: O(n log n)
// S.C.: O(1)
import java.util.Arrays;

// java main.java
class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] tokens = {100};
        int expected = 0;
        int result = solution.bagOfTokensScore(tokens, 50);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        tokens = new int[]{200, 100};
        expected = 1;
        result = solution.bagOfTokensScore(tokens, 150);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        tokens = new int[]{100, 200, 300, 400, 500};
        expected = 2;
        result = solution.bagOfTokensScore(tokens, 200);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        tokens = new int[]{33, 4, 28, 24, 96};
        expected = 3;
        result = solution.bagOfTokensScore(tokens, 35);
        System.out.println(result + " " + (expected == result ? "true" : "false"));

        tokens = new int[]{};
        expected = 0;
        result = solution.bagOfTokensScore(tokens, 50);
        System.out.println(result + " " + (expected == result ? "true" : "false"));
    }
}

class Solution {
    public int bagOfTokensScore(int[] tokens, int power) {
        if (tokens.length == 0) {
            return 0;
        }
        int left = 0;
        int right = tokens.length - 1;
        int maxScore = 0;
        int score = 0;
        int currentPower = power;
        Arrays.sort(tokens);
        while (left <= right) {
            if (currentPower >= tokens[left]) {
                currentPower -= tokens[left++];
                score++;
                maxScore = Math.max(maxScore, score);
            } else if (score > 0) {
                currentPower += tokens[right--];
                score--;
            } else {
                break;
            }
        }

        return maxScore;
    }
}
