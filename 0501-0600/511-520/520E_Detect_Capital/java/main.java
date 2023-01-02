// 520. Detect Capital
// https://leetcode.com/problems/detect-capital/
class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        String word = "USA";
        boolean expected = true;
        boolean result = solution.detectCapitalUse(word);
        System.out.printf("%s %s\n", result, result == expected);

        word = "FlaG";
        expected = false;
        result = solution.detectCapitalUse(word);
        System.out.printf("%s %s\n", result, result == expected);
    }
}

class Solution {
    public boolean detectCapitalUse(String word) {
        final boolean firstCapital = isCapital(word.charAt(0));
        boolean allCapital = true;
        boolean anyCapital = false;
        for (int i = 1; i < word.length(); i++) {
            if (isCapital(word.charAt(i))) {
                anyCapital = true;
            } else {
                allCapital = false;
            }
        }
        final boolean capital = firstCapital && !anyCapital;
        final boolean lower = !firstCapital && !anyCapital;
        final boolean upper = firstCapital && allCapital;
        return capital || lower || upper;
    }

    private boolean isCapital(char ch) {
        return ch >= 65 && ch <= 90;
    }
}