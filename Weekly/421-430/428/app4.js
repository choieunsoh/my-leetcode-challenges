var makeStringGood = function (s) {
  //
};
/*
class Solution {
    public int makeStringGood(String s) {
        int count[] = new int[26], min = s.length();
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        for (int i = 0; i <= s.length(); i++) {
            Map<Integer, Integer> map = new HashMap<>(Map.of(0, 0));
            for (int j : count) {
                Map<Integer, Integer> curr = new HashMap<>();
                for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
                    if (entry.getKey() + entry.getValue() < min) {
                        if (entry.getKey() + j >= i) {
                            curr.put(Math.min(i, Math.min(j, entry.getKey() + j - i)), Math.min(curr.getOrDefault(Math.min(i, Math.min(j, entry.getKey() + j - i)), Integer.MAX_VALUE), entry.getKey() + entry.getValue() + Math.max(0, Math.min(j, entry.getKey() + j - i) - i)));
                            curr.put(Math.min(i, Math.max(j - i, 0)), Math.min(curr.getOrDefault(Math.min(i, Math.max(0, j - i)), Integer.MAX_VALUE), entry.getKey() + entry.getValue() + Math.max(0, Math.max(0, j - i) - i)));
                        } else {
                            curr.put(0, Math.min(curr.getOrDefault(0, Integer.MAX_VALUE), entry.getValue() + i - j));
                            curr.put(j, Math.min(curr.getOrDefault(j, Integer.MAX_VALUE), entry.getKey() + entry.getValue()));
                        }
                    }
                }
                map = curr;
            }
            for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
                min = Math.min(min, entry.getKey() + entry.getValue());
            }
        }
        return min;
    }
}


import java.util.*;

class Solution {


    public int makeStringGood(String s) {
        char[] str = s.toCharArray();
        int n = str.length;
        int[] cnt = new int[26];
        for (char c : str) {
            cnt[c - 'a']++;
        }
        int mn = n, mx = 0;
        for (int c : cnt) {
            if (c > 0) {
                mn = Math.min(mn, c);
                mx = Math.max(mx, c);
            }
        }
        if (mn == mx) {
            return 0;
        }
        int[][] dp = new int[26][2];
        int ans = n - 1;
        for (int i = mn; i <= mx; i++) {
            dp[0][0] = cnt[0];
            dp[0][1] = cnt[0] <= i ? i - cnt[0] : cnt[0] - i;
            for (int j = 1; j < 26; j++) {
                dp[j][0] = Math.min(dp[j - 1][0], dp[j - 1][1]) + cnt[j];
                if (cnt[j] >= i) {
                    dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][1]) + (cnt[j] - i);
                } else {
                    dp[j][1] = Math.min(dp[j - 1][0] + i - Math.min(i, cnt[j] + cnt[j - 1]), dp[j - 1][1] + i - Math.min(i, cnt[j] + Math.max(0, cnt[j - 1] - i)));
                }
            }
            ans = Math.min(ans, Math.min(dp[25][0], dp[25][1]));
        }
        return ans;
    }


}
*/

var str = 'acab';
var expected = 1;
var result = makeStringGood(str);
console.log(result, result === expected);

var str = 'wddw';
var expected = 0;
var result = makeStringGood(str);
console.log(result, result === expected);

var str = 'aaabc';
var expected = 2;
var result = makeStringGood(str);
console.log(result, result === expected);
